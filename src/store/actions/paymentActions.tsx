// @ts-nocheck
import { PaymentService } from '../../services/PaymentService';


export function loadPayments() {
    return (dispatch) => {
        try {
            const payments = PaymentService.QueryAll();
            const action = { type: 'SET_PAYMENTS', payments };
            dispatch(action);
        } catch (err) {
            console.error('Error in QueryAll payments Action:', err);
            throw err;
        }
    }
}
