import React, { FC } from 'react';
import { sayHello } from '../../redux/actions/actions';
import { PropsDisplay } from '../../types';

import './Display.css';

const Display: FC<PropsDisplay> = ({ isOn, isStart, score }) => {

    return (
        <div className="app-display">
            {sayHello(isOn, isStart)}
            {!isStart || !isOn ? "" : <h4>Score: {score}</h4>}
        </div>
    );
};

export default Display;