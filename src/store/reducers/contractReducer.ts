// @ts-nocheck

const INITIAL_STATE = {
    contracts: []
};

export function contractReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SET_CONTRACTS':
            return {
                ...state,
                contracts: [...action.contracts]
            };

        default:
            return state;

    }

}