// @ts-nocheck
import { Asset } from "../types/Asset";


export const useAssetsToShow = (assets: Asset[]) => {

    const getFormattedDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('he-IL', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        });
    }

    return assets.map(asset => {
        return {
            ...asset,
            isInRent: asset.isInRent ? 'שכירות' : 'בעלות',
            rentBeginsAt: getFormattedDate(asset.rentBeginsAt),
            rentEndsAt: getFormattedDate(asset.rentEndsAt),
            closeExitAt: getFormattedDate(asset.closeExitAt),
            priorNoticeAt: getFormattedDate(asset.priorNoticeAt),
            optionEndsAt: getFormattedDate(asset.optionEndsAt),
            contractRenewalAt: getFormattedDate(asset.contractRenewalAt)
        } as Asset;
    });
}