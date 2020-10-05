export const POWER_OFF = "POWER_OFF";
export const POWER_ON = "POWER_ON";
export const TOGGLE_MODE = "TOGGLE_MODE";
export const TOGGLE_START = "TOGGLE_START";
export const MOVES_GAME = "MOVES_GAME";
export const UPDATE_SCORE = "UPDATE_SCORE";

export interface AppState {
    isOn: boolean
    isStrictMode: boolean
    isStart: boolean
};

export interface GameState {
    movesGame: number[]
    score: number
};

interface PowerOffAction {
    type: typeof POWER_OFF
};

interface PowerOnAction {
    type: typeof POWER_ON
};

interface ToogleModeAction {
    type: typeof TOGGLE_MODE,
    isStrictMode: boolean
};

interface ToogleStartAction {
    type: typeof TOGGLE_START,
    isStart: boolean
};

interface AddMoveGame {
    type: typeof MOVES_GAME,
    movesGame: number[]
};

interface UpdateScoreGame {
    type: typeof UPDATE_SCORE,
    score: number
};

export type AppActionTypes = PowerOffAction | PowerOnAction | ToogleModeAction | ToogleStartAction;
export type GameActionTypes = AddMoveGame | UpdateScoreGame;
