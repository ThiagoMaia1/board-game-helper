import React, { createContext, ReactNode, useReducer } from "react";
import GameCharacter from "../models/character";
import {characters} from "../models/character";
import {items} from "../models/item";

interface GamePosition {
    tile : number,
    lane : number,
    chapter : number,
    character : GameCharacter,
    items : Array<keyof typeof items>,
    moveTile : (offset : number) => void,
    moveLane : (offset : number) => void,
    defineCharacter : (character : GameCharacter) => void,
}

const initialGamePosition = {
    tile: 0,
    lane: 0,
    chapter: 0,
    character: characters[0],
    items: [],
    moveTile: () => void 0, 
    moveLane: () => void 0,
    defineCharacter: (_ : GameCharacter) => void 0,
} as GamePosition;

class Action {
    constructor(
        public type : 'move-tile' | 'move-lane' | 'define-character',
        public tileOffset = 0,
        public laneOffset = 0,
        public character ?: GameCharacter,
    ) {};
};

const tileIndexesThatChangeChapters = [
    0,
    25,
    50,
    75,
    100,
    125
]
export const totalChapters = tileIndexesThatChangeChapters.length;
export const totalLanes = 6;
export const totalTiles = 154;

function gamePositionReducer(state : GamePosition, action : Action) {
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
        default:
            return state;
    }
}

export const GamePositionContext : React.Context<GamePosition> = 
    createContext(initialGamePosition);

function GamePositionProvider({children} : {children : ReactNode}) {

    const [state, dispatch] = useReducer(gamePositionReducer, initialGamePosition);

    const moveTile = (tileOffset : number) => dispatch(new Action('move-tile', tileOffset));
    const moveLane = (laneOffset : number) => dispatch(new Action('move-lane', 0, laneOffset));
    const defineCharacter = (character : GameCharacter) => dispatch(new Action('define-character', 0, 0, character));

    return <GamePositionContext.Provider value={{...state, moveTile, moveLane, defineCharacter}}>
        {children}
    </GamePositionContext.Provider>
}

export default GamePositionProvider;
