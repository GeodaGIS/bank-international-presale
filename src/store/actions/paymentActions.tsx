// @ts-nocheck
import { PaymentService } from '../../services/PaymentService';


export function loadPayments() {
    return (dispatch) => {
        try {
            const payments = PaymentService.QueryAll();
            dispatch({ type: 'SET_PAYMENTS', payments });
        } catch (err) {
            console.error('Error in QueryAll payments Action:', err);
            throw err;
        }
    }
}
