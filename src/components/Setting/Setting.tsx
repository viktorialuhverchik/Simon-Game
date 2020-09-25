import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Display from '../Display/Display';
import {
    powerOff,
    powerOn, 
    startGame,
    toggleMode
} from '../../redux/actions/actions';

import './Setting.css';

const Setting = ({ isOn, isStrictMode, isStart, isAvailableClick, score }: any) => {

    const dispatch = useDispatch();

    return (
        <div className="setting-panel">
            <h2>Simon</h2>
            <div className="button-wrapper">
                <Button circular
                    color="red"
                    className="button-power"
                    onClick={() => !isOn ? dispatch(powerOn()) : dispatch(powerOff(isStart, score, dispatch, isAvailableClick))}
                >
                    {!isOn ? <h6>Turn on</h6> : <h6>Turn off</h6>}
                </Button>

                <Button circular
                    color="yellow"
                    className="button-modes"
                    disabled={!isOn ? true : false}
                    onClick={() => dispatch(toggleMode(isStrictMode))}
                >
                    {!isStrictMode ? <h6>Simple</h6> : <h6>Use Strict</h6>}
                </Button>

                <Button circular
                    color="green"
                    className="button-start"
                    disabled={!isOn ? true : false}
                    onClick={() => dispatch(startGame(isStart))}
                >
                    {!isStart ? <h6>Start</h6> : <h6>Stop</h6>}
                </Button>
            </div>
            <Display isOn={isOn} isStart={isStart} score={score}/>
        </div>
    );
};

export default Setting;
