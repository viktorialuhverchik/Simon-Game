export interface State {
    app: {
        isOn: boolean
        isStart: boolean
        isStrictMode: boolean
    },
    game: {
        movesGame: number[]
        score: number
    }
};

export interface PropsDisplay {
    isOn: boolean
    isStart: boolean
    score: number
};

export interface PropsGame {
    isStart: boolean
    isStrictMode: boolean
    movesGame: number[]
    score: number
};

export interface PropsSettings {
    isOn: boolean
    isStrictMode: boolean
    isStart: boolean
    score: number
};

export interface IThemes {
    classical: string
    synthwave: string
};
