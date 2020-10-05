import { GameActionTypes, GameState, MOVES_GAME, UPDATE_SCORE } from "../types";

const initialState: GameState = {
    movesGame: [],
    score: 0
};

export const gameReducer = (state = initialState, action: GameActionTypes): GameState => {
    switch (action.type) {
        case MOVES_GAME:
            return { ...state, movesGame: action.movesGame };
        case UPDATE_SCORE:
            return { ...state, score: action.score };
        default: 
            return state;
    };
};