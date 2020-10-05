import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Display from '../Display/Display';
import {
    powerOff,
    powerOn, 
    toggleStart,
    toggleMode
} from '../../redux/actions/actions';
import { PropsSettings } from '../../types';

import './Settings.css';

const Settings: FC<PropsSettings> = ({ isOn, isStrictMode, isStart, score }) => {

    const dispatch = useDispatch();

    return (
        <div className="setting-panel">
            <h1>Simon</h1>
            <div className="button-wrapper">

                <div className="power-button_wrapper">
                    <div
                        className={`power-button available ${isOn ? "pushed-button" : ""}`}
                        onClick={() => !isOn ? dispatch(powerOn()) : dispatch(powerOff(isStart, isStrictMode, dispatch))}
                        data-testid="power"
                    >
                    </div>
                    {!isOn ? <span>ON</span> : <span>OFF</span>}
                </div>

                <div className="modes-button_wrapper">
                    <div
                        className={`modes-button ${!isOn || isStart ? "disabled" : "available"} ${isStrictMode ? "pushed-button" : ""}`}
                        onClick={() => dispatch(toggleMode(isStrictMode))}
                        data-testid="mode"
                    >
                    </div>
                    {!isStrictMode ? <span>SIMPLE</span> : <span>STRICT</span>}
                </div>

                <div className="start-button_wrapper">
                    <div
                        className={`toggle-start_button ${!isOn ? "disabled" : "available"} ${isStart ? "pushed-button" : ""}`}
                        onClick={() => dispatch(toggleStart(!isStart, 0, []))}
                        data-testid="start"
                    >
                    </div>
                    {!isStart ? <span>START</span> : <span>STOP</span>}
                </div>

            </div>
            <Display isOn={isOn} isStart={isStart} score={score}/>
        </div>
    );
};

export default Settings;
