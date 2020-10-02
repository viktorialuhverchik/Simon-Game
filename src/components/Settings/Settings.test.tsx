import React from 'react';
import { renderWithRedux } from '../../index.test';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fireEvent } from '@testing-library/react';
import { powerOff, powerOn, toggleMode, toggleStart } from '../../redux/actions/actions';
import { POWER_OFF, POWER_ON, TOGGLE_MODE, TOGGLE_START, UPDATE_SCORE } from '../../redux/types';
import Settings from './Settings';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Settings component',() => {

    let store: any;

    beforeEach(() => {
        store = mockStore();
        fetchMock.resetMocks();
    });

    afterEach(() => {
        fetchMock.mockClear();
    });

    it('renders Settings component', () => {
        const wrapper = renderWithRedux(<Settings />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should power on', () => {
        const expectedActions = { type: POWER_ON };
        store.dispatch(powerOn());
        expect(store.getActions()[0]).toEqual(expectedActions);
    });

    it('should power off', () => {
        let isStart: boolean = true;
        let isStrictMode: boolean = false; 
        let dispatch: any = store.dispatch;
        const expectedActions = { type: POWER_OFF };
        const expectedActions1 = { type: UPDATE_SCORE, score: 0 }; 
        store.dispatch(powerOff(isStart, isStrictMode, dispatch));
        expect(store.getActions()[0]).toEqual(expectedActions && expectedActions1);
    });

    it('should toggle mode', () => {
        let isStrictMode: boolean = false;
        const expectedActions = { type: TOGGLE_MODE, isStrictMode: true };
        store.dispatch(toggleMode(isStrictMode));
        expect(store.getActions()[0]).toEqual(expectedActions);
    });

    it('should toggle start', () => {
        let isStart: boolean = false;
        let score: number = 0; 
        let movesGame: any = [];
        const expectedActions = { type: TOGGLE_START, isStart: true };
        const expectedActions1 = { type: UPDATE_SCORE, score: 0 };   
        store.dispatch(toggleStart(isStart, score, movesGame));
        expect(store.getActions()[0]).toEqual(expectedActions && expectedActions1);
    });

    it('click on power', () => {
        const { getByTestId } = renderWithRedux(<Settings/>);
        fireEvent.click(getByTestId("power"));
        expect(getByTestId("power")).toBeTruthy();
    });

    it('click on mode', () => {
        const { getByTestId } = renderWithRedux(<Settings/>);
        fireEvent.click(getByTestId("mode"));
        expect(getByTestId("mode")).toBeTruthy();
    });

    it('click on start', () => {
        const { getByTestId } = renderWithRedux(<Settings/>);
        fireEvent.click(getByTestId("start"));
        expect(getByTestId("start")).toBeTruthy();
    });
});