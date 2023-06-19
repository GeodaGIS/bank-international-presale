export const UtilService = {
    makeId,
    getFieldsMap
}


function makeId() {
    let id = '';
    const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 20; i++) {
        const idx = Math.floor(Math.random() * digits.length);
        id += digits.charAt(idx);
    }
    return id;
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
        moreExitPointsAndServiceFeeChange: 'נקודות נוספות ליציאה + שינוי דמ"ש',
        contractStatus: 'סטטוס חוזה',
        contractRenewalAt: 'תאריך חידוש חוזה',
        approverName: 'שם מאשר',
        type: 'סוג'
    }
}