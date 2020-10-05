import React from 'react';
import {
    POWER_ON,
    POWER_OFF,
    TOGGLE_MODE,
    TOGGLE_START,
    MOVES_GAME,
    UPDATE_SCORE,
    AppActionTypes,
    GameActionTypes
} from "../types";

export const powerOn = (): AppActionTypes => ({
    type: POWER_ON
});

export const powerOff = (isStart: boolean, isStrictMode: boolean, dispatch: any): AppActionTypes => {
    if(isStart) {
        dispatch(toggleStart(false, 0, []));
    };
    if(isStrictMode) {
        dispatch(toggleMode(isStrictMode));
    };
    return {
        type: POWER_OFF
    };
};

export const sayHello = (isOn: boolean, isStart: boolean) => (
    !isOn || isStart ? "" : <h6>Hello! <br/> Select mode and press start</h6>
);

export const toggleMode = (isStrictMode: boolean): AppActionTypes => ({
    type: TOGGLE_MODE,
    isStrictMode: !isStrictMode
});

export const toggleStart = (isStart: boolean, score: number, movesGame: number[]) => {
    return (dispatch: any) => {
        dispatch(updateScore(score));
        dispatch ({
            type: MOVES_GAME,
            movesGame
        });
        dispatch ({
            type: TOGGLE_START,
            isStart
        });
    };
};

export const repeatGame = (score: number, movesGame: number[]) => {
    return (dispatch: any) => {
        dispatch(updateScore(score));
        dispatch ({
            type: MOVES_GAME,
            movesGame
        });
    }
};

export const addMoveGame = (movesGame: number[]): GameActionTypes => {
    let nextStep: number = Math.round(Math.random() * 3);
    movesGame.push(nextStep);
    return {
        type: MOVES_GAME,
        movesGame
    };
};

export const updateScore = (score: number): GameActionTypes => ({
    type: UPDATE_SCORE,
    score
});

export const compareMove = (isStrictMode: boolean, movesGame: number[], moveUser: number, score: number, counter: number) => {
    return (dispatch: any) => {
        if(movesGame[counter] !== moveUser && isStrictMode) {
            playAudio("/music/loose.wav");
            dispatch(toggleStart(true, 0, []));
        } else if (movesGame[counter] !== moveUser && !isStrictMode){
            playAudio("/music/loose.wav");
            let updatedMoves = movesGame.splice(0, movesGame.length - 1);
            dispatch(repeatGame(score, updatedMoves));
        } else {
            if(counter + 1 === movesGame.length) {
                dispatch(updateScore(++score));
            };
        };
    };
};

export const playAudio = (musicUrl: string) => {
    let audio = new Audio(musicUrl);
    audio.play();
};
    