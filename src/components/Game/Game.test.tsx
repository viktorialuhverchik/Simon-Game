import React from 'react';
import { renderWithRedux } from '../../index.test';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from "jest-fetch-mock";
import { fireEvent } from '@testing-library/react';
import { addMoveGame } from '../../redux/actions/actions';
import { MOVES_GAME } from '../../redux/types';
import Game from './Game';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let isOn: boolean = true;
let isStart: boolean = true;
let isStrictMode: boolean = false;
let movesGame: any = [];
let score: number = 0;

const initialState = {
    app: {
        isOn,
        isStart,
        isStrictMode
    },
    game: {
        movesGame,
        score
    }
};

describe('Game component',() => {

    let store: any;

    beforeEach(() => {
        store = mockStore(initialState);
        fetchMock.resetMocks();
    });

    afterEach(() => {
        fetchMock.mockClear();
    });

    it('renders Game component', () => {
        const wrapper = renderWithRedux(<Game isStart={isStart} isStrictMode={isStrictMode} movesGame={movesGame} score={score} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should add move game', () => {
        let movesGame: any = [];
        const expectedActions = { type: MOVES_GAME, movesGame };
        store.dispatch(addMoveGame(movesGame));
        expect(store.getActions()[0]).toEqual(expectedActions);
    });

    it('click on yellow, red, blue, green', () => {
        const { getByTestId } = renderWithRedux(<Game isStart={isStart} isStrictMode={isStrictMode} movesGame={movesGame} score={score}/>);
        fireEvent.click(getByTestId("yellow"));
        fireEvent.click(getByTestId("red"));
        fireEvent.click(getByTestId("blue"));
        fireEvent.click(getByTestId("green"));
        expect(getByTestId("yellow")).toBeDefined();
        expect(getByTestId("red")).toBeDefined();
        expect(getByTestId("blue")).toBeDefined();
        expect(getByTestId("green")).toBeDefined();
    });
});

describe('Game setTimeout',() => {

    jest.useFakeTimers();

    it("setTimeout showMove", () => {
        jest.runAllTimers();
        expect(setTimeout).toBeCalled();
    });
});