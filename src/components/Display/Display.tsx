import React from 'react';
import { sayHello } from '../../redux/actions/actions';

import './Display.css';

const Display = ({ isOn, isStart, score }: any) => {

    return (
        <div className="app-display">
            {sayHello(isOn, isStart)}
            {!isStart || !isOn ? "" : <h4>Score: {score}</h4>}
        </div>
    );
};

export default Display;