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
        public moveTile = (_ : number) : void => void 0, 
        public moveLane = (_ : number) : void => void 0,
        public defineCharacter = (_ : GameCharacter) : void => void 0,
        public toggleHoldingItem = () : void => void 0,
        public toggleChapterHistory = () : void => void 0,
        public setLife = (_ : number) : void => void 0,
        public undo = () : void => void 0,
        public redo = () : void => void 0,
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
                return {
                    ...state,
                    past: [...past, present],
                    present: reducer(state.present, action),
                    future: []
                }
        }
    }
}

const initialState = new UndoState<GameState>(gamePositionReducer());

export const GameStateContext : React.Context<UndoState<GameState>> = createContext(initialState);

function GameStateProvider({children} : {children : ReactNode}) {

    const [state, dispatch] = useReducer(undoReducer<GameState, GameAction>(gamePositionReducer), initialState);

    const moveTile = (tileOffset : number) => dispatch(new GameAction('move-tile', tileOffset));
    const moveLane = (laneOffset : number) => dispatch(new GameAction('move-lane', undefined, laneOffset));
    const defineCharacter = (character : GameCharacter) => dispatch(new GameAction('define-character', undefined, undefined, character));
    const toggleHoldingItem = () => dispatch(new GameAction('toggle-holding-item'));
    const toggleChapterHistory = () => dispatch(new GameAction('toggle-chapter-history'));
    const setLife = (lifeTotal : number) => dispatch(new GameAction('set-life', undefined, undefined, undefined, undefined, lifeTotal));
    const undo = () => dispatch(new GameAction('undo'));
    const redo = () => dispatch(new GameAction('redo'));

    return <GameStateContext.Provider value={{
        ...state, 
        moveTile, 
        moveLane, 
        defineCharacter, 
        toggleHoldingItem, 
        toggleChapterHistory, 
        setLife, 
        undo, 
        redo
    }}>
        {children}
    </GameStateContext.Provider>
}

export default GameStateProvider;
