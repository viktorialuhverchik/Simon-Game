import React from 'react';
import * as actions from './actions';
import * as types from '../types';
import { makeTestStore } from '../../index.test';

describe('actions', () => {
    let store: any;

    beforeEach(() => {
        store = makeTestStore();
    });

    it('should create an action power on', () => {
        const expectedAction = {
            type: types.POWER_ON
        };
        expect(actions.powerOn()).toEqual(expectedAction);
    });

    it('should create an action power off', () => {
        let isStrictMode: boolean = true;
        let isStart: boolean = false;
        let dispatch: any = store.dispatch;
        if(isStart) {
            dispatch(actions.toggleStart(false, 0, []));
        };
        if(isStrictMode) {
            dispatch(actions.toggleMode(isStrictMode));
        };
        const expectedAction = {
            type: types.POWER_OFF
        };
        expect(actions.powerOff(isStart, isStrictMode, dispatch)).toEqual(expectedAction);
    });

    it('should create an action say hello show message', () => {
        let isOn: boolean = true;
        let isStart: boolean = false;
        const expectedAction = <h6>Hello! <br /> Select mode and press start</h6>;
        expect(actions.sayHello(isOn, isStart)).toEqual(expectedAction);
    });

    it('should create an action say hello, without message', () => {
        let isOn: boolean = false;
        let isStart: boolean = false;
        const expectedAction = "";
        expect(actions.sayHello(isOn, isStart)).toEqual(expectedAction);
    });

    it('should create an action toggle mode', () => {
        let isStrictMode: boolean = true;
        const expectedAction = {
            type: types.TOGGLE_MODE,
            isStrictMode: !isStrictMode
        };
        expect(actions.toggleMode(isStrictMode)).toEqual(expectedAction);
    });

    it('should create an action repeat game', () => {
        let score: number = 0;
        let movesGame: any = [];
        const expectedAction = {
            type: types.MOVES_GAME,
            movesGame
        };
        store.dispatch(actions.updateScore(score));
        const repeatGame = jest.fn();
        repeatGame.mockImplementation(() => {
            return expectedAction;
        });
        expect(repeatGame(score, movesGame)).toEqual(expectedAction);
    });

    it('should create an action add move game', () => {
        let movesGame: any = [];
        let nextStep: number = Math.round(Math.random() * 3);
        movesGame.push(nextStep);
        const expectedAction = {
            type: types.MOVES_GAME,
            movesGame
        };
        expect(actions.addMoveGame(movesGame)).toEqual(expectedAction);
    });

    it('should create an action add update score', () => {
        let score: number = 0;
        const expectedAction = {
            type: types.UPDATE_SCORE,
            score
        };
        const updateScore = jest.fn();
        updateScore.mockImplementation(() => {
            return expectedAction;
        });
        expect(updateScore(score)).toEqual(expectedAction);
    });

    it('should create an action add compare move', () => {
        let isStrictMode: boolean = false;
        let movesGame: any = [1];
        let moveUser: number = 1;
        let score: number = 0;
        let counter: number = 0;
        const expectedAction = {
            type: types.UPDATE_SCORE,
            score: score++
        };
        const compareMove = jest.fn();
        compareMove.mockImplementation(() => {
            return expectedAction;
        });
        expect(compareMove(isStrictMode, movesGame, moveUser, score, counter)).toEqual(expectedAction);
    });

    it('should create an action add play audio', () => {
        let musicUrl = "/music/0.wav";
        let audio = new Audio(musicUrl);
        const spy = jest.spyOn(audio, 'play');
        audio.play();
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});