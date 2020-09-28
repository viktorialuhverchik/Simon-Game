import { MOVE_GAME, MOVE_USER, UPDATE_SCORE } from "../types";

const initialState: any = {
    moveGame: [],
    moveUser: null,
    score: 0
};

export const gameReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case MOVE_GAME:
            return { ...state, moveGame: action.moveGame };
        case MOVE_USER:
            return { ...state, moveUser: action.moveUser };
        case UPDATE_SCORE:
            return { ...state, score: action.score };
        default: 
            return state;
    };
};