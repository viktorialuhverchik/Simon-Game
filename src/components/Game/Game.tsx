import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMoveGame, compareMove, playAudio } from '../../redux/actions/actions';

import './Game.css'; 

const Game = ({ isStart, isStrictMode, movesGame, score }: any) => {

    const dispatch = useDispatch();

    let [isAvailableClick, setIsAvailableClick] = useState(false);
    let [isActiveRed, setIsActiveRed] = useState(false);
    let [isActiveBlue, setIsActiveBlue] = useState(false);
    let [isActiveGreen, setIsActiveGreen] = useState(false);
    let [isActiveYellow, setIsActiveYellow] = useState(false);
    let [counter, setCounter] = useState(0);    

    useEffect(() => {
        if(!isStart) return;
        dispatch(addMoveGame(movesGame));
        setCounter(0);
        setIsAvailableClick(false);
        let gameMoveIndex = 0;

        const showMove = () => {
            switch (movesGame[gameMoveIndex]) {
                case 0:
                    setIsActiveYellow(true);
                    playAudio("/music/0.wav");
                    setTimeout(() => setIsActiveYellow(false), 1000);
                    break;
                case 1:
                    setIsActiveRed(true);
                    playAudio("/music/1.wav");
                    setTimeout(() => setIsActiveRed(false), 1000);
                    break;
                case 2:
                    setIsActiveGreen(true);
                    playAudio("/music/2.wav");
                    setTimeout(() => setIsActiveGreen(false), 1000);
                    break;
                case 3:
                    setIsActiveBlue(true);
                    playAudio("/music/3.wav");
                    setTimeout(() => setIsActiveBlue(false), 1000);
                    break;
            };
            gameMoveIndex++;

            if (movesGame.length === gameMoveIndex) {
                setIsAvailableClick(true);
            } else {
                setTimeout(showMove, 1500);
            }
        };
        
        setTimeout(showMove, 500);
    }, [isStart, score, movesGame, dispatch]);

    const checkUserMove = (step: number) => {
        compareMove(isStrictMode, movesGame, step, score, counter)(dispatch);
        setCounter(++counter);
    };

    return (
        <div className="app-game">
            <div className="sector-wrapper">
                <div
                    className={`sector top-left inline yellow ${!isActiveYellow ? "" : "active"} ${!isAvailableClick ? "disabled" : "available"}`}
                    onClick={() => checkUserMove(0)}
                />
                <div
                    className={`sector top-right inline red ${!isActiveRed ? "" : "active"} ${!isAvailableClick ? "disabled" : "available"}`}
                    onClick={() => checkUserMove(1)}
                />
                <div
                    className={`sector bottom-left inline green ${!isActiveGreen ? "" : "active"} ${!isAvailableClick ? "disabled" : "available"}`}
                    onClick={() => checkUserMove(2)}
                />
                <div
                    className={`sector bottom-right inline blue ${!isActiveBlue ? "" : "active"} ${!isAvailableClick ? "disabled" : "available"}`}
                    onClick={() => checkUserMove(3)}
                />
            </div>
        </div>
    );
};

export default Game;
