// @ts-nocheck


const INITIAL_STATE = {
    assets: []
};


export function assetReducer(state = INITIAL_STATE, action) {

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