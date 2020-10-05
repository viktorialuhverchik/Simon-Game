import { POWER_ON, POWER_OFF, TOGGLE_MODE, TOGGLE_START, AppState, AppActionTypes } from "../types";

const initialState: AppState = {
    isOn: false,
    isStrictMode: false,
    isStart: false
};

export const appReducer = (state = initialState, action: AppActionTypes): AppState => {
    switch (action.type) {
        case POWER_ON:
            return { ...state, isOn: true };
        case POWER_OFF:
            return { ...state, isOn: false };
        case TOGGLE_MODE:
            return { ...state, isStrictMode: action.isStrictMode };
        case TOGGLE_START:
            return { ...state, isStart: action.isStart };
        default: 
            return state;
    };
};