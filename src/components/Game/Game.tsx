import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMoveGame, compareMove, playAudio } from '../../redux/actions/actions';
import { PropsGame } from '../../types';

import './Game.css';

const Game: FC<PropsGame> = ({ isStart, isStrictMode, movesGame, score }) => {

    const dispatch = useDispatch();

    let [isAvailableClick, setIsAvailableClick] = useState<boolean>(false);
    let [isActiveRed, setIsActiveRed] = useState<boolean>(false);
    let [isActiveBlue, setIsActiveBlue] = useState<boolean>(false);
    let [isActiveGreen, setIsActiveGreen] = useState<boolean>(false);
    let [isActiveYellow, setIsActiveYellow] = useState<boolean>(false);
    let [counter, setCounter] = useState<number>(0);  
    let [isPushedRed, setIsPushedRed] = useState<boolean>(false);
    let [isPushedBlue, setIsPushedBlue] = useState<boolean>(false);
    let [isPushedGreen, setIsPushedGreen] = useState<boolean>(false);
    let [isPushedYellow, setIsPushedYellow] = useState<boolean>(false);

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
                setTimeout(showMove, 1200);
            }
        };
        
        setTimeout(showMove, 1500);
    }, [isStart, score, movesGame, dispatch]);

    const checkUserMove = (step: number) => {
        switch (step) {
            case 0:
                setIsPushedYellow(true);
                setIsActiveYellow(true);
                playAudio("/music/0.wav");
                setTimeout(() => setIsActiveYellow(false), 800);
                setTimeout(() => setIsPushedYellow(false), 200);
                break;
            case 1:
                setIsPushedRed(true);
                setIsActiveRed(true);
                playAudio("/music/1.wav");
                setTimeout(() => setIsActiveRed(false), 800);
                setTimeout(() => setIsPushedRed(false), 200);
                break;
            case 2:
                setIsPushedGreen(true);
                setIsActiveGreen(true);
                playAudio("/music/2.wav");
                setTimeout(() => setIsActiveGreen(false), 800);
                setTimeout(() => setIsPushedGreen(false), 200);
                break;
            case 3:
                setIsPushedBlue(true);
                setIsActiveBlue(true);
                playAudio("/music/3.wav");
                setTimeout(() => setIsActiveBlue(false), 800);
                setTimeout(() => setIsPushedBlue(false), 200);
                break;
        };
        compareMove(isStrictMode, movesGame, step, score, counter)(dispatch);
        setCounter(++counter);
    };

    return (
        <div className="app-game" data-testid="game">
            <div className="sector-wrapper">
                <div
                    className={`sector top-left inline yellow
                        ${!isActiveYellow ? "" : "active"}
                        ${!isAvailableClick ? "disabled" : "available"}
                        ${!isPushedYellow ? "" : "pushed"}`}
                    onClick={() => checkUserMove(0)}
                    data-testid="yellow"
                />
                <div
                    className={`sector top-right inline red
                        ${!isActiveRed ? "" : "active"}
                        ${!isAvailableClick ? "disabled" : "available"}
                        ${!isPushedRed ? "" : "pushed"}`}
                    onClick={() => checkUserMove(1)}
                    data-testid="red"
                />
                <div
                    className={`sector bottom-left inline green
                        ${!isActiveGreen ? "" : "active"}
                        ${!isAvailableClick ? "disabled" : "available"}
                        ${!isPushedGreen ? "" : "pushed"}`}
                    onClick={() => checkUserMove(2)}
                    data-testid="green"
                />
                <div
                    className={`sector bottom-right inline blue
                        ${!isActiveBlue ? "" : "active"}
                        ${!isAvailableClick ? "disabled" : "available"}
                        ${!isPushedBlue ? "" : "pushed"}`}
                    onClick={() => checkUserMove(3)}
                    data-testid="blue"
                />
            </div>
        </div>
    );
};

export default Game;
