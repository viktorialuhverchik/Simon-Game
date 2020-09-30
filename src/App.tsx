import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Game from './components/Game/Game';
import Settings from './components/Settings/Settings';
import Themes from './components/Themes/Themes';

import './App.css';

const App: FC = () => {

    const isOn: boolean = useSelector((state: any) => state.app.isOn);
    const isStart: boolean = useSelector((state: any) => state.app.isStart);
    const isStrictMode: boolean = useSelector((state: any) => state.app.isStrictMode);
    const movesGame: any = useSelector((state: any) => state.game.movesGame);
    const score: number = useSelector((state: any) => state.game.score);
    
    return (
        <div className="App">
            <Themes />
            <Game isStart={isStart} isStrictMode={isStrictMode} movesGame={movesGame} score={score} />
            <Settings isOn={isOn} isStrictMode={isStrictMode} isStart={isStart} score={score} />
        </div>
    );
};

export default App;
