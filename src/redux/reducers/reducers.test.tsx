import { appReducer } from './appReducer';
import { gameReducer } from './gameReducer';

describe('app reducer', () => {

    it('should return the initial state', () => {
        expect(appReducer(undefined, {})).toEqual({isOn: false, isStart: false, isStrictMode: false});
    });

    it('should handle POWER_ON', () => {
        expect(appReducer(
            undefined, 
            {
                type: 'POWER_ON',
                isOn: true
            }
            ))
            .toEqual({isOn: true, isStart: false, isStrictMode: false});
    });

    it('should handle POWER_OFF', () => {
        expect(appReducer(
            undefined, 
            {
                type: 'POWER_OFF',
                isOn: false
            }
            ))
            .toEqual({isOn: false, isStart: false, isStrictMode: false});
    });

    it('should handle TOGGLE_MODE', () => {
        expect(appReducer(
            undefined, 
            {
                type: 'TOGGLE_MODE',
                isStrictMode: true
            }
            ))
            .toEqual({isOn: false, isStart: false, isStrictMode: true});
    });

    it('should handle TOGGLE_START', () => {
        expect(appReducer(
            undefined, 
            {
                type: 'TOGGLE_START',
                isStart: true
            }
            ))
            .toEqual({isOn: false, isStart: true, isStrictMode: false});
    });
});

describe('game reducer', () => {

    it('should return the initial state', () => {
        expect(gameReducer(undefined, {})).toEqual({movesGame: [], score: 0});
    });

    it('should handle MOVES_GAME', () => {
        expect(gameReducer(
            undefined, 
            {
                type: 'MOVES_GAME',
                movesGame: [2]
            }
            ))
            .toEqual({movesGame: [2], score: 0});
    });

    it('should handle UPDATE_SCORE', () => {
        expect(gameReducer(
            undefined, 
            {
                type: 'UPDATE_SCORE',
                score: 1
            }
            ))
            .toEqual({movesGame: [], score: 1});
    });
});