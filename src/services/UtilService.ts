export const UtilService = {
    makeId,
    getFieldsMap,
    getEntityFieldsMap
}


function makeId(prefix: string) {
    let id = '';
    const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 20; i++) {
        const idx = Math.floor(Math.random() * digits.length);
        id += digits.charAt(idx);
    }
    return `${prefix}_${id}`;
}


function getFieldsMap() {
    return {
        branchNum: 'מספר סניף',
        branchName: 'שם סניף',
        rentContractId: 'חוזה שכירות',
        managementContractId: 'חוזה ניהול',
        bankName: 'בנק',
        address: 'כתובת',
        town: 'עיר',
        isInRent: 'בעלות/שכירות',
        ownerName: 'בעלים',
        areaSize: 'שטח',
        employeesCount: 'כמות עובדים',
        areaSizePerEmployee: 'שטח לעובד',
        monthleyNominalServiceFee: 'דמ"ש חודשי נומינלי',
        baseIndex: 'מדד בסיס',
        monthleyIndexedServiceFee: 'דמ"ש לחודש ממודד',
        totalExpenses: 'סך הוצאות שוטפות',
        rentBeginsAt: 'תחילת שכירות',
        rentEndsAt: 'סיום שכירות',
        closeExitAt: 'נקודת יציאה קרובה',
        priorNoticeMonthsCount: 'הודעה מראש בחודשים',
        priorNoticeAt: 'תאריך להודעה מראש',
        optionEndsAt: 'סיום אופציה',
        contractStatus: 'סטטוס חוזה',
        contractRenewalAt: 'תאריך חידוש חוזה',
        approverName: 'שם מאשר',
        type: 'סוג',
        // moreExitPointsAndServiceFeeChange: 'נקודות נוספות ליציאה + שינוי דמ"ש'
    }
}


function getEntityFieldsMap(entityName: string) {
    if (entityName === 'contract') {
        return {
            rentContractId: 'חוזה שכירות',
            managementContractId: 'חוזה ניהול',
            isInRent: 'בעלות/שכירות',
            ownerName: 'בעלים',
            areaSize: 'שטח',
            employeesCount: 'כמות עובדים',
            areaSizePerEmployee: 'שטח לעובד',
            monthleyNominalServiceFee: 'דמ"ש חודשי נומינלי',
            baseIndex: 'מדד בסיס',
            monthleyIndexedServiceFee: 'דמ"ש לחודש ממודד',
            totalExpenses: 'סך הוצאות שוטפות',
            rentBeginsAt: 'תחילת שכירות',
            rentEndsAt: 'סיום שכירות',
            closeExitAt: 'נקודת יציאה קרובה',
            priorNoticeMonthsCount: 'הודעה מראש בחודשים',
            priorNoticeAt: 'תאריך להודעה מראש',
            optionEndsAt: 'סיום אופציה',
            contractStatus: 'סטטוס חוזה',
            contractRenewalAt: 'תאריך חידוש חוזה',
            approverName: 'שם מאשר',
            type: 'סוג',
        }
    }
    if (entityName === 'payment') {
        return {
            num: 'מספר הוראת תשלום',
            frequency: 'תדירות',
            supplier: 'ספק',
            billNum: 'מספר חשבון',
            aim: 'תשלום עבור',
            docDate: 'תאריך מסמך',
            payDate: 'תאריך תשלום',
            details: 'פרטים',
            coin: 'מטבע חוזי',
            total: 'סה"כ לתשלום'
        }
    }
}

