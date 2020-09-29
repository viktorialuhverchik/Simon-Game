import { MOVES_GAME, UPDATE_SCORE } from "../types";

const initialState: any = {
    movesGame: [],
    score: 0
};

export const gameReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case MOVES_GAME:
            return { ...state, movesGame: action.movesGame };
        case UPDATE_SCORE:
            return { ...state, score: action.score };
        default: 
            return state;
    };
};