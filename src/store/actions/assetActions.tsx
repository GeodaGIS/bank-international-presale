// @ts-nocheck
import { AssetService } from '../../services/AssetService';

export function loadAssets() {
    return (dispatch) => {
        try {
            const assets = AssetService.QueryAll();
            dispatch({ type: 'SET_ASSETS', assets });
        } catch (err) {
            console.error('Error in QueryAll Action:', err);
            throw err;
        }
    }
}
