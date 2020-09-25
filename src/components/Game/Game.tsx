import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMoveGame, compareMove } from '../../redux/actions/actions';

import './Game.css'; 

const Game = ({ isStart, isStrictMode, isAvailableClick, moveGame, moveUser, score }: any) => {

    const dispatch = useDispatch();

    let [isActiveRed, setIsActiveRed] = useState(false);
    let [isActiveBlue, setIsActiveBlue] = useState(false);
    let [isActiveGreen, setIsActiveGreen] = useState(false);
    let [isActiveYellow, setIsActiveYellow] = useState(false);

    useEffect(() => {
        if(!isStart) return;
        dispatch(addMoveGame(moveGame));
        moveGame.forEach((step: any, index: number) => {
            setTimeout(() => {
                switch (step) {
                    case 0:
                        setTimeout(() => setIsActiveYellow(true), 1800);
                        setTimeout(() => setIsActiveYellow(false), 3600);
                        clearTimeout();
                        break;
                    case 1:
                        setTimeout(() => setIsActiveRed(true), 1800);
                        setTimeout(() => setIsActiveRed(false), 3600);
                        clearTimeout();
                        break;
                    case 2:
                        setTimeout(() => setIsActiveGreen(true), 1800);
                        setTimeout(() => setIsActiveGreen(false), 3600);
                        clearTimeout();
                        break;
                    case 3:
                        setTimeout(() => setIsActiveBlue(true), 1800);
                        setTimeout(() => setIsActiveBlue(false), 3600);
                        clearTimeout();
                        break;
                    default: 
                        return;
                };
            }, index * 3000);
        });
    }, [isStart, score]);

    const waitUserMove = async (moveUser: number) => {

        try {
            await dispatch(compareMove(isStrictMode, moveGame, moveUser, score));
        } catch(error) {
            console.log(error);
        }
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
