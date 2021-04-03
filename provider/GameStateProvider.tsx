import React, { createContext, ReactNode, useReducer } from "react";
import GameCharacter from "../models/character";
import {characters} from "../models/character";
// import {items} from "../models/item";

// interface GameState {
//     tile : number,
//     lane : number,
//     chapter : number,
//     character : GameCharacter,
//     holdingItem : boolean,
//     // items : Array<keyof typeof items>,
//     moveTile : (offset : number) => void,
//     moveLane : (offset : number) => void,
//     defineCharacter : (character : GameCharacter) => void,
//     changeItemStatus : (holdingItem : boolean) => void,
// }

const initialGameState = {
    tile: 0,
    lane: 0,
    chapter: 0,
    character: characters[0],
    holdingItem: false,    
    chapterHistoryIsVisible: false,
    // items: [],
    moveTile: (_ : number) : void => void 0, 
    moveLane: (_ : number) : void => void 0,
    defineCharacter: (_ : GameCharacter) : void => void 0,
    toggleHoldingItem: () : void => void 0,
    toggleChapterHistory: () : void => void 0,
};

type GameState = typeof initialGameState;

class Action {
    constructor(
        public type : 'move-tile' | 'move-lane' | 'define-character' | 'toggle-holding-item' | 'toggle-chapter-history',        
        public tileOffset = 0,
        public laneOffset = 0,
        public character ?: GameCharacter,
        public holdingItem = false,
    ) {};
};

export const chapters = {
    0: `Era uma vez
    Um lugarzinho no meio do nada
    Com sabor de chocolate
    E cheiro de terra molhada
    Era uma vez
    A riqueza contra a simplicidade
    Uma mostrando pra outra
    Quem dava mais felicidade
    Pra gente ser feliz
    Tem que cultivar as nossas amizades
    Os amigos de verdade
    Pra gente ser feliz
    Tem que mergulhar na própria fantasia
    Na nossa liberdade
    Uma história de amor
    De aventura e de magia
    Só tem a ver
    Quem já foi criança um dia`,
    25: 'História do capítulo 2',
    50: 'História do capítulo 3',
    75: 'História do capítulo 4',
    100: 'História do capítulo 5',
    125: 'História do capítulo 6',
};

const tileIndexesThatChangeChapters = Object.keys(chapters).map(Number);

export const totalChapters = tileIndexesThatChangeChapters.length;
export const totalLanes = 6;
export const totalTiles = 154;

function gamePositionReducer(state : GameState, action : Action) {
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
        default:
            return state;
    }
}

export const GameStateContext : React.Context<GameState> = 
    createContext(initialGameState);

function GameStateProvider({children} : {children : ReactNode}) {

    const [state, dispatch] = useReducer(gamePositionReducer, initialGameState);

    const moveTile = (tileOffset : number) => dispatch(new Action('move-tile', tileOffset));
    const moveLane = (laneOffset : number) => dispatch(new Action('move-lane', undefined, laneOffset));
    const defineCharacter = (character : GameCharacter) => dispatch(new Action('define-character', undefined, undefined, character));
    const toggleHoldingItem = () => dispatch(new Action('toggle-holding-item'));
    const toggleChapterHistory = () => dispatch(new Action('toggle-chapter-history'));

    return <GameStateContext.Provider value={{...state, moveTile, moveLane, defineCharacter, toggleHoldingItem, toggleChapterHistory}}>
        {children}
    </GameStateContext.Provider>
}

export default GameStateProvider;
