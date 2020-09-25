import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Game from './components/Game/Game';
import Setting from './components/Setting/Setting';

import './App.css';

const App: FC = () => {

    const isOn: boolean = useSelector((state: any) => state.app.isOn);
    const isStart: boolean = useSelector((state: any) => state.app.isStart);
    const isStrictMode: boolean = useSelector((state: any) => state.app.isStrictMode);
    const isAvailableClick: boolean = useSelector((state: any) => state.app.isAvailableClick);
    const moveGame: any = useSelector((state: any) => state.game.moveGame);
    const moveUser: any = useSelector((state: any) => state.game.moveUser);
    const score: number = useSelector((state: any) => state.game.score);
    
    return (
        <div className="App">
            <Game isStart={isStart} isStrictMode={isStrictMode} moveGame={moveGame} moveUser={moveUser} score={score} isAvailableClick={isAvailableClick}/>
            <Setting isOn={isOn} isStrictMode={isStrictMode} isStart={isStart} score={score} />
        </div>
    );
};

export default App;
