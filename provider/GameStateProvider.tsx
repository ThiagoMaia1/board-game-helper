import React, { createContext, ReactNode, useReducer } from "react";
import GameCharacter from "../models/character";

export const baseLife = 16;

const initialGameState = {
    tile: 0,
    lane: 0,
    chapter: 0,
    life: baseLife,
    character: undefined as unknown as GameCharacter,
    holdingItem: false,    
    chapterHistoryIsVisible: false,
};

type GameState = typeof initialGameState;

class UndoState<S> {
    constructor (
        public present: S,
        public past : Array<S> = [],
        public future : Array<S> = [],
    ) {};    
}

class MainState {
    constructor (
        public gamePosition : UndoState<GameState>,
        public popup : PopupState,     
        public moveTile = (_ : number) : void => void 0, 
        public moveLane = (_ : number) : void => void 0,
        public defineCharacter = (_ : GameCharacter) : void => void 0,
        public toggleHoldingItem = () : void => void 0,
        public setLife = (_ : number) : void => void 0,
        public undo = () : void => void 0,
        public redo = () : void => void 0,
        public updatePopup = (_ : PopupContent) : void => void 0,
    ) {};
}

class GameAction {
    constructor(
        public type : 'move-tile' | 'move-lane' | 'define-character' | 'toggle-holding-item' | 'toggle-chapter-history' | 'set-life' | 'undo' | 'redo',        
        public tileOffset = 0,
        public laneOffset = 0,
        public character ?: GameCharacter,
        public holdingItem = false,
        public lifeTotal = 0,
    ) {};
};

export const chapters = {
    0: "A frente foi criado um labirinto de lasers altamente potentes. Quem pode impedir que os feixes atinjam seus novos companheiros? Bloque!",
    25: "Seis desconhecidos se encontram uma cidade fantasma. Sortudo decide se prevenir contra possíveis problemas que poderão surgir adiante.",
    50: "Fisgada encontrou civis feitos de escravos. Ela precisa da equipe para resgatá-los e os guiar para o ponto de resgate.",
    75: "Clínico encontra destroços de um avião militar. Por ali estão recursos para recarregar as energias, e curar as feridas dos colegas.",
    100: "Um grande abismo se aproxima, para atravessar os civis, Plana precisa sacrificar suas energias em um grande salto.",
    125: "O resgate está próximo, mas Torpedo descobre que os mercenários prepararam uma emboscada a frente. O conflito será inevitável!",
};

const tileIndexesThatChangeChapters = Object.keys(chapters).map(Number);

export const totalChapters = tileIndexesThatChangeChapters.length;
export const totalLanes = 6;
export const totalTiles = 154;

function gamePositionReducer(state : GameState = initialGameState, action ?: GameAction) {
    if (!action) return state;
    switch (action.type) {
        case 'move-tile':
            let chapter = state.chapter;
            let newTile = state.tile + action.tileOffset;
            tileIndexesThatChangeChapters.forEach((t, i) => {
                let nextTileIndex = tileIndexesThatChangeChapters[i+1];
                if (newTile > t && (nextTileIndex === undefined || t < nextTileIndex))
                    chapter = i;
            });
            return {...state, tile: newTile, chapter};
        case 'move-lane':
            return {...state, lane: state.lane + action.laneOffset};
        case 'define-character':
            return {...state, character: action.character as GameCharacter};
        case 'toggle-holding-item':
            return {...state, holdingItem: !state.holdingItem};
        case 'toggle-chapter-history':
            return {...state, chapterHistoryIsVisible: !state.chapterHistoryIsVisible};
        case 'set-life':
            return {...state, life: action.lifeTotal};
        default:
            return state;
    }
}
type Action = {type : string};

function CombineReducers(reducers : {[keyName : string] : (state : any, action : any) => typeof state}) {
    return (state : any, action : any) =>
        Object.keys(reducers).reduce((newState : {[keyName : string] : object}, key : keyof typeof reducers) => {
            newState[key] = reducers[key](state[key], action);
            return newState;
        }, {}) as unknown as MainState;
}

type PopupContent = ReactNode;
type PopupState = {content : PopupContent};
type PopupAction = {type : 'update-popup', content : PopupContent}; 

function PopupReducer(state : PopupState = initialPopupState, action ?: PopupAction) {

    if (!action) return state;
    if (action.type !== 'update-popup') return state; 
    return {
        ...state,
        content: action.content,
    }
};

const initialPopupState = {content: undefined};

function undoReducer<S, A extends Action>(reducer : (state ?: S, action ?: A) => S) {

    return (state : UndoState<S>, action : A) => {
        if (!action) return state;
        const {past, present, future} = state;
        switch (action.type) {
            case 'undo':
                let len = Math.max(past.length-1, 0);
                return {
                    ...state,
                    past: past.slice(0, len),
                    present: past[len] ?? present,
                    future: [present, ...future],
                };
            case 'redo': {
                let len = Math.min(1, future.length - 1);
                return {
                    ...state,
                    past: [...past, present],
                    present: future[len] ?? present,
                    future: future.slice(len + 1),
                };
            }
            default:
                let newPresent = reducer(state.present, action);
                if (newPresent !== present)
                    return {
                        ...state,
                        past: [...past, present],
                        present: newPresent,
                        future: []
                    }
                else 
                    return state;
        }
    }
}

const initialUndoState = new UndoState<GameState>(gamePositionReducer());
const initialState = new MainState(initialUndoState, initialPopupState);

export const GameStateContext : React.Context<MainState> = createContext(initialState);

const mainReducer = CombineReducers({
    gamePosition: undoReducer<GameState, GameAction>(gamePositionReducer),
    popup: PopupReducer,
});

function GameStateProvider({children} : {children : ReactNode}) {

    const [state, dispatch] = useReducer(mainReducer, initialState);

    const moveTile = (tileOffset : number) => dispatch(new GameAction('move-tile', tileOffset));
    const moveLane = (laneOffset : number) => dispatch(new GameAction('move-lane', undefined, laneOffset));
    const defineCharacter = (character : GameCharacter) => dispatch(new GameAction('define-character', undefined, undefined, character));
    const toggleHoldingItem = () => dispatch(new GameAction('toggle-holding-item'));
    const setLife = (lifeTotal : number) => dispatch(new GameAction('set-life', undefined, undefined, undefined, undefined, lifeTotal));
    const undo = () => dispatch(new GameAction('undo'));
    const redo = () => dispatch(new GameAction('redo'));
    const updatePopup = (content : PopupContent) => dispatch({type: 'update-popup', content});

    return <GameStateContext.Provider value={{
        ...state, 
        moveTile, 
        moveLane, 
        defineCharacter, 
        toggleHoldingItem, 
        setLife, 
        undo, 
        redo,
        updatePopup
    }}>
        {children}
    </GameStateContext.Provider>
}

export default GameStateProvider;
