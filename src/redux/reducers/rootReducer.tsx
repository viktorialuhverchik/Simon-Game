import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from './appReducer';
import { gameReducer } from './gameReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    game: gameReducer
});