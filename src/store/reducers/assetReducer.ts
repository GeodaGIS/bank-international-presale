// @ts-nocheck
import { GlobalState } from '../../types/Store';

const INITIAL_STATE = {
    assets: [],
} as GlobalState;

export function assetReducer(state = INITIAL_STATE, action): GlobalState {
    switch (action.type) {
        case 'SET_ASSETS':
            return {
                ...state,
                assets: [...action.assets]
            };
        default:
            return state;
    }
}