import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Game from './components/Game/Game';
import Settings from './components/Settings/Settings';
import Themes from './components/Themes/Themes';
import { State } from './types';

import './App.css';

const App: FC = () => {

    const isOn: boolean = useSelector((state: State) => state.app.isOn);
    const isStart: boolean = useSelector((state: State) => state.app.isStart);
    const isStrictMode: boolean = useSelector((state: State) => state.app.isStrictMode);
    const movesGame: number[] = useSelector((state: State) => state.game.movesGame);
    const score: number = useSelector((state: State) => state.game.score);
    
    return (
        <div className="App">
            <Themes />
            <Game isStart={isStart} isStrictMode={isStrictMode} movesGame={movesGame} score={score} />
            <Settings isOn={isOn} isStrictMode={isStrictMode} isStart={isStart} score={score} />
        </div>
    );
};

export default App;
