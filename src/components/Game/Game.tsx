import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMoveGame, compareMove } from '../../redux/actions/actions';

import './Game.css'; 

const Game = ({ isStart, isStrictMode, moveGame, score }: any) => {

    const dispatch = useDispatch();

    let [isAvailableClick, setIsAvailableClick] = useState(false);
    let [isActiveRed, setIsActiveRed] = useState(false);
    let [isActiveBlue, setIsActiveBlue] = useState(false);
    let [isActiveGreen, setIsActiveGreen] = useState(false);
    let [isActiveYellow, setIsActiveYellow] = useState(false);
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        if(!isStart) return;
        dispatch(addMoveGame(moveGame));
        setCounter(0);
        setIsAvailableClick(false);
        let gameMoveIndex = 0;

        const showMove = () => {
            switch (moveGame[gameMoveIndex]) {
                case 0:
                    setIsActiveYellow(true);
                    setTimeout(() => setIsActiveYellow(false), 1000);
                    break;
                case 1:
                    setIsActiveRed(true);
                    setTimeout(() => setIsActiveRed(false), 1000);
                    break;
                case 2:
                    setIsActiveGreen(true);
                    setTimeout(() => setIsActiveGreen(false), 1000);
                    break;
                case 3:
                    setIsActiveBlue(true);
                    setTimeout(() => setIsActiveBlue(false), 1000);
                    break;
            };
            gameMoveIndex++;

            if (moveGame.length === gameMoveIndex) {
                setIsAvailableClick(true);
            } else {
                setTimeout(showMove, 1500);
            }
        };

        setTimeout(showMove, 200);
    }, [isStart, score, moveGame, dispatch]);

    const waitUserMove = (step: number) => {
        compareMove(isStrictMode, moveGame, step, score, counter)(dispatch);
        setCounter(++counter);
    };

    return (
        <div className="app-game">
            <div className="sector-wrapper">
                <div
                    className={`sector top-left inline yellow ${!isActiveYellow ? "" : "active"} ${!isAvailableClick ? "disabled" : "available"}`}
                    onClick={() => waitUserMove(0)}
                />
                <div
                    className={`sector top-right inline red ${!isActiveRed ? "" : "active"} ${!isAvailableClick ? "disabled" : "available"}`}
                    onClick={() => waitUserMove(1)}
                />
                <div
                    className={`sector bottom-left inline green ${!isActiveGreen ? "" : "active"} ${!isAvailableClick ? "disabled" : "available"}`}
                    onClick={() => waitUserMove(2)}
                />
                <div
                    className={`sector bottom-right inline blue ${!isActiveBlue ? "" : "active"} ${!isAvailableClick ? "disabled" : "available"}`}
                    onClick={() => waitUserMove(3)}
                />
            </div>
        </div>
    );
};

export default Game;
