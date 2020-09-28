import React from 'react';
import {
    POWER_ON,
    POWER_OFF,
    TOGGLE_MODE,
    START_GAME,
    MOVE_GAME,
    UPDATE_SCORE, 
    TOGGLE_AVAILABLE,
    MOVE_USER
} from "../types";

export const powerOn = () => ({
    type: POWER_ON
});

export const powerOff = (isStart: boolean, score: number, dispatch: any) => {
    if(isStart) {
        dispatch(startGame(isStart));
    };
    score = 0;
    dispatch(updateScore(score));
    dispatch ({
        type: MOVE_GAME,
        moveGame: []
    });
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

export const startGame = (isStart: boolean) => {
    return (dispatch: any) => {
        dispatch ({
            type: MOVE_GAME,
            moveGame: []
        });
        dispatch ({
            type: START_GAME,
            isStart: !isStart
        });
    }
};

export const addMoveGame = (moveGame: any) => {
    let nextStep: number = Math.round(Math.random() * 3);
    moveGame.push(nextStep);
    console.log("Ход игры", moveGame);
    return {
        type: MOVE_GAME,
        moveGame
    };
};

export const addMoveUser = (moveUser: number) => ({
    type: MOVE_USER,
    moveUser
});

export const setAvailableClick = (isAvailableClick: boolean) => ({
    type: TOGGLE_AVAILABLE,
    isAvailableClick: !isAvailableClick
});

export const updateScore = (score: number) => ({
    type: UPDATE_SCORE,
    score
});

export const compareMove = (isStrictMode: boolean, moveGame: any, moveUser: any, score: number, counter: number) => {
    console.log("User", moveUser);
    return (dispatch: any) => {
        if(moveGame[counter - 1] !== moveUser && isStrictMode) {
            console.log("Loose");
            dispatch ({
                type: MOVE_GAME,
                moveGame: []
            });
            score = 0;
            dispatch(updateScore(score));
        } else if (moveGame[counter - 1] !== moveUser && !isStrictMode){
            console.log("Loose");
            dispatch ({
                type: MOVE_GAME,
                moveGame
            });
        } else {
            if(counter === moveGame.length) {
                console.log("Win");
                score++;
                dispatch(updateScore(score));
            };
        };
    };
};
