// @ts-nocheck
import { ContractService } from '../../services/ContractService';


export function loadContracts() {
    return (dispatch) => {
        try {
            const contracts = ContractService.QueryAll();
            const action = { type: 'SET_CONTRACTS', contracts };
            dispatch(action);
        } catch (err) {
            console.error('Error in QueryAll contracts Action:', err);
            throw err;
        }
    }
}
