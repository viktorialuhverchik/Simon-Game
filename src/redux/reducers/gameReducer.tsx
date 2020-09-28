import { MOVE_GAME, UPDATE_SCORE } from "../types";

const initialState: any = {
    moveGame: [],
    score: 0
};

export const gameReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case MOVE_GAME:
            return { ...state, moveGame: action.moveGame };
        case UPDATE_SCORE:
            return { ...state, score: action.score };
        default: 
            return state;
    };
};