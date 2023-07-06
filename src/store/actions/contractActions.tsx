// @ts-nocheck
import { ContractService } from '../../services/ContractService';


export function loadContracts() {
    return (dispatch) => {
        try {
            const contracts = ContractService.QueryAll();
            dispatch({ type: 'SET_CONTRACTS', contracts });
        } catch (err) {
            console.error('Error in QueryAll contracts Action:', err);
            throw err;
        }
    }
}
