// @ts-nocheck

const INITIAL_STATE = {
    payments: []
};

export function paymentReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'SET_PAYMENTS':
            return {
                ...state,
                payments: [...action.payments]
            };

        default:
            return state;

    }

}