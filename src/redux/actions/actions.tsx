import React from 'react';
import {
    POWER_ON,
    POWER_OFF,
    TOGGLE_MODE,
    TOGGLE_START,
    MOVES_GAME,
    UPDATE_SCORE
} from "../types";

export const powerOn = () => ({
    type: POWER_ON
});

export const powerOff = (isStart: boolean, isStrictMode: boolean, dispatch: any) => {
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

export const toggleMode = (isStrictMode: boolean) => ({
    type: TOGGLE_MODE,
    isStrictMode: !isStrictMode
});

export const toggleStart = (isStart: boolean, score: number, movesGame: any) => {
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
    }
};

export const addMoveGame = (movesGame: any) => {
    let nextStep: number = Math.round(Math.random() * 3);
    movesGame.push(nextStep);
    console.log("Moves of game", movesGame);
    return {
        type: MOVES_GAME,
        movesGame
    };
};

export const updateScore = (score: number) => ({
    type: UPDATE_SCORE,
    score
});

export const compareMove = (isStrictMode: boolean, movesGame: any, moveUser: any, score: number, counter: number) => {
    console.log("User move", moveUser);
    return (dispatch: any) => {
        if(movesGame[counter] !== moveUser && isStrictMode) {
            console.log("Strict Loose");
            playAudio("../../music/loose.wav");
            dispatch(toggleStart(true, 0, []));
        } else if (movesGame[counter] !== moveUser && !isStrictMode){
            console.log("Non strict Loose");
            playAudio("../../music/loose.wav");
            dispatch(updateScore(score));
            dispatch(toggleStart(true, score, movesGame));
        } else {
            if(counter + 1 === movesGame.length) {
                console.log("Win");
                playAudio("../../music/win.wav");
                dispatch(updateScore(++score));
            };
        };
    };
};

export const playAudio = (musicUrl: string) => {
    let audio = new Audio(musicUrl);
    audio.play();
};
    