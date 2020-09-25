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

export const powerOff = (isStart: boolean, score: number, dispatch: any, isAvailableClick: boolean) => {
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

export const startGame = (isStart: boolean) => ({
    type: START_GAME,
    isStart: !isStart
});

export const addMoveGame = (move: any) => {
    let nextStep: number = Math.round(Math.random() * 3);
    move.push(nextStep);
    console.log(move);
    return {
        type: MOVE_GAME,
        moveGame: move
    };
};

// export const addMoveUser = (step: number) => {
//     let moveUser: any = [];
//     moveUser.push(step);
//     console.log(moveUser);
//     return {
//         type: MOVE_USER,
//         moveUser
//     };
// };

export const setAvailableClick = (isAvailableClick: boolean) => ({
    type: TOGGLE_AVAILABLE,
    isAvailableClick: !isAvailableClick
});

export const updateScore = (score: number) => ({
    type: UPDATE_SCORE,
    score
});

export const compareMove = (isStrictMode: boolean, moveGame: any, moveUser: any, score: number) => {
    return (dispatch: any) => {
        // if(moveGame.length !== moveUser.length) {
        //     console.log("Loose");
        //     if(isStrictMode) {
        //         score = 0;
        //         dispatch(updateScore(score));
        //     };
        //     return;
        // };
        for (let i = 0; i < moveGame.length; i++) {
            if(moveGame[i] !== moveUser) {
                console.log("Loose");
                if(isStrictMode) {
                    score = 0;
                    dispatch(updateScore(score));
                };
            } else {
                console.log("Win");
                score++;
                console.log(score);
                dispatch(updateScore(score));
            };
        };
    };
};
