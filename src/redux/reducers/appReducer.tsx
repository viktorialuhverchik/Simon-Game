import { POWER_ON, POWER_OFF, TOGGLE_MODE, START_GAME, TOGGLE_AVAILABLE } from "../types";

const initialState: any = {
    isOn: false,
    isStrictMode: false,
    isStart: false,
    isAvailableClick: true
};

export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case POWER_ON:
            return { ...state, isOn: true };
        case POWER_OFF:
            return { ...state, isOn: false };
        case TOGGLE_MODE:
            return { ...state, isStrictMode: action.isStrictMode };
        case START_GAME:
            return { ...state, isStart: action.isStart };
        case TOGGLE_AVAILABLE:
            return { ...state, isAvailableClick: action.isAvailableClick };
        default: 
            return state;
    };
};