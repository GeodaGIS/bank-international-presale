// @ts-nocheck


export const useReadable = (entities, entityName) => {

    const getFormattedDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('he-IL', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        });
    }

    if (entityName === 'asset' || entityName === 'contract') {
        return entities.map(entity => {
            return {
                ...entity,
                isInRent: entity.isInRent ? 'שכירות' : 'בעלות',
                rentBeginsAt: getFormattedDate(entity.rentBeginsAt),
                rentEndsAt: getFormattedDate(entity.rentEndsAt),
                closeExitAt: getFormattedDate(entity.closeExitAt),
                priorNoticeAt: getFormattedDate(entity.priorNoticeAt),
                optionEndsAt: getFormattedDate(entity.optionEndsAt),
                contractRenewalAt: getFormattedDate(entity.contractRenewalAt)
            };
        });
    }

    if (entityName === 'payment') {
        return entities.map(entity => {
            return {
                ...entity,
                docDate: getFormattedDate(entity.docDate),
                payDate: getFormattedDate(entity.payDate)
            };
        });
    }

}