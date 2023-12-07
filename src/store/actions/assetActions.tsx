// @ts-nocheck
import { AssetService } from '../../services/AssetService';


export function loadAssets() {
    return (dispatch) => {
        try {
            const assets = AssetService.QueryAll();
            const action = { type: 'SET_ASSETS', assets };
            dispatch(action);
        } catch (err) {
            console.error('Error in QueryAll assets Action:', err);
            throw err;
        }
    }
}
