import { Payment } from "../types/Payment";
import { StorageService } from "./StorageService"

export const PaymentService = {
    QueryAll,
    // QueryById,
    // Create,
    // Update,
    // Delete
}

const { saveToStorage, loadFromStorage } = StorageService;


function QueryAll() {
    let allPaymentsJson = loadFromStorage('payments') as string | null;
    if (!allPaymentsJson) {
        const initialPayments = getInitialPayments();
        saveToStorage('payments', initialPayments);
        allPaymentsJson = loadFromStorage('payments') as string;
    }
    const allPayments = JSON.parse(allPaymentsJson) as Payment[];
    return allPayments;
}


function getInitialPayments() {
    return [
        {
            id: 'p_7561', // p from 'payment'
            num: 7561,
            frequency: 'שנתי',
            supplier: 'יעל שמחון',
            billNum: 525574,
            aim: 'ניהול',
            docDate: 1672477141000,
            payDate: 1672477141000,
            details: 'דמי ניהול',
            coin: 'שקל',
            total: 2800
        },
        {
            id: 'p_5471',
            num: 5471,
            frequency: 'שנתי',
            supplier: 'חניון המילניום',
            billNum: 29341,
            aim: 'חניה',
            docDate: 1704013141000,
            payDate: 1704013141000,
            details: 'חניונים',
            coin: 'דולר',
            total: 900
        },
        {
            id: 'p_9251',
            num: 9251,
            frequency: 'רבעוני',
            supplier: 'אא מערכות',
            billNum: 47296,
            aim: 'ניהול',
            docDate: 1641033099000,
            payDate: 1641033099000,
            details: 'דמי ניהול רבעון 1',
            coin: 'שקל',
            total: 600
        },
        {
            id: 'p_9252',
            num: 9252,
            frequency: 'רבעוני',
            supplier: 'אא מערכות',
            billNum: 47296,
            aim: 'ניהול',
            docDate: 1648805499000,
            payDate: 1648805499000,
            details: 'דמי ניהול רבעון 2',
            coin: 'שקל',
            total: 900
        },
        {
            id: 'p_9253',
            num: 9253,
            frequency: 'רבעוני',
            supplier: 'אא מערכות',
            billNum: 47296,
            aim: 'ניהול',
            docDate: 1656667899000,
            payDate: 1656667899000,
            details: 'דמי ניהול רבעון 3',
            coin: 'שקל',
            total: 300
        },
        {
            id: 'p_9254',
            num: 9254,
            frequency: 'רבעוני',
            supplier: 'אא מערכות',
            billNum: 47296,
            aim: 'ניהול',
            docDate: 1664616699000,
            payDate: 1664616699000,
            details: 'דמי ניהול רבעון 4',
            coin: 'שקל',
            total: 1400
        },
        {
            id: 'p_6211',
            num: 6211,
            frequency: 'רבעוני',
            supplier: 'חניוני האחוזה',
            billNum: 17696,
            aim: 'חניה',
            docDate: 1672569099000,
            payDate: 1672569099000,
            details: 'חניונים',
            coin: 'דולר',
            total: 2100
        },
        {
            id: 'p_6212',
            num: 6212,
            frequency: 'רבעוני',
            supplier: 'חניוני האחוזה',
            billNum: 17696,
            aim: 'חניה',
            docDate: 1680341499000,
            payDate: 1680341499000,
            details: 'חניונים',
            coin: 'דולר',
            total: 2100
        },
        {
            id: 'p_6213',
            num: 6213,
            frequency: 'רבעוני',
            supplier: 'חניוני האחוזה',
            billNum: 17696,
            aim: 'חניה',
            docDate: 1688203899000,
            payDate: 1688203899000,
            details: 'חניונים',
            coin: 'דולר',
            total: 2100
        },
        {
            id: 'p_6214',
            num: 6214,
            frequency: 'רבעוני',
            supplier: 'חניוני האחוזה',
            billNum: 17696,
            aim: 'חניה',
            docDate: 1696152699000,
            payDate: 1696152699000,
            details: 'חניונים',
            coin: 'דולר',
            total: 2100
        },
        {
            id: 'p_8241',
            num: 8241,
            frequency: 'רבעוני',
            supplier: 'גד החזקות בע"מ',
            billNum: 31843,
            aim: 'ניהול',
            docDate: 1641033099000,
            payDate: 1641033099000,
            details: 'דמי ניהול רבעון 1',
            coin: 'שקל',
            total: 1900
        },
        {
            id: 'p_8242',
            num: 8242,
            frequency: 'רבעוני',
            supplier: 'גד החזקות בע"מ',
            billNum: 31843,
            aim: 'ניהול',
            docDate: 1648805499000,
            payDate: 1648805499000,
            details: 'דמי ניהול רבעון 2',
            coin: 'שקל',
            total: 2200
        },
        {
            id: 'p_8243',
            num: 8243,
            frequency: 'רבעוני',
            supplier: 'גד החזקות בע"מ',
            billNum: 31843,
            aim: 'ניהול',
            docDate: 1656667899000,
            payDate: 1656667899000,
            details: 'דמי ניהול רבעון 3',
            coin: 'שקל',
            total: 3400
        },
        {
            id: 'p_8244',
            num: 8244,
            frequency: 'רבעוני',
            supplier: 'גד החזקות בע"מ',
            billNum: 31843,
            aim: 'ניהול',
            docDate: 1664616699000,
            payDate: 1664616699000,
            details: 'דמי ניהול רבעון 4',
            coin: 'שקל',
            total: 2000
        },
        {
            id: 'p_4821',
            num: 4821,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1641810699000,
            payDate: 1641810699000,
            details: 'שכירות ינואר',
            coin: 'שקל',
            total: 1500
        },
        {
            id: 'p_4822',
            num: 4822,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1644489099000,
            payDate: 1644489099000,
            details: 'שכירות פברואר',
            coin: 'שקל',
            total: 1500
        },
        {
            id: 'p_4823',
            num: 4823,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1646908299000,
            payDate: 1646908299000,
            details: 'שכירות מרץ',
            coin: 'שקל',
            total: 1500
        },
        {
            id: 'p_4824',
            num: 4824,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1649583099000,
            payDate: 1649583099000,
            details: 'שכירות אפריל',
            coin: 'שקל',
            total: 1500
        },
        {
            id: 'p_4825',
            num: 4825,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1652175099000,
            payDate: 1652175099000,
            details: 'שכירות מאי',
            coin: 'שקל',
            total: 2500
        },
        {
            id: 'p_4826',
            num: 4826,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1654853499000,
            payDate: 1654853499000,
            details: 'שכירות יוני',
            coin: 'שקל',
            total: 2500
        },
        {
            id: 'p_4827',
            num: 4827,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1657445499000,
            payDate: 1657445499000,
            details: 'שכירות יולי',
            coin: 'שקל',
            total: 2500
        },
        {
            id: 'p_4828',
            num: 4828,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1660123899000,
            payDate: 1660123899000,
            details: 'שכירות אוגוסט',
            coin: 'שקל',
            total: 2500
        },
        {
            id: 'p_4829',
            num: 4829,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1662802299000,
            payDate: 1662802299000,
            details: 'שכירות ספטמבר',
            coin: 'שקל',
            total: 2500
        },
        {
            id: 'p_48210',
            num: 48210,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1665394299000,
            payDate: 1665394299000,
            details: 'שכירות אוקטובר',
            coin: 'שקל',
            total: 2500
        },
        {
            id: 'p_48211',
            num: 48211,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1668076299000,
            payDate: 1668076299000,
            details: 'שכירות נובמבר',
            coin: 'שקל',
            total: 2500
        },
        {
            id: 'p_48212',
            num: 48212,
            frequency: 'חודשי',
            supplier: 'בינדי ובניו',
            billNum: 92167,
            aim: 'שכר דירה',
            docDate: 1670668299000,
            payDate: 1670668299000,
            details: 'שכירות דצמבר',
            coin: 'שקל',
            total: 2500
        },
        {
            id: 'p_7241',
            num: 7241,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1673346699000,
            payDate: 1673346699000,
            details: 'שכירות ינואר',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_7242',
            num: 7242,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1676025099000,
            payDate: 1676025099000,
            details: 'שכירות פברואר',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_7243',
            num: 7243,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1678444299000,
            payDate: 1678444299000,
            details: 'שכירות מרץ',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_7244',
            num: 7244,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1681119099000,
            payDate: 1681119099000,
            details: 'שכירות אפריל',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_7245',
            num: 7245,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1683711099000,
            payDate: 1683711099000,
            details: 'שכירות מאי',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_7246',
            num: 7246,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1686389499000,
            payDate: 1686389499000,
            details: 'שכירות יוני',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_7247',
            num: 7247,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1688981499000,
            payDate: 1688981499000,
            details: 'שכירות יולי',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_7248',
            num: 7248,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1691659899000,
            payDate: 1691659899000,
            details: 'שכירות אוגוסט',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_7249',
            num: 7249,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1694338299000,
            payDate: 1694338299000,
            details: 'שכירות ספטמבר',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_72410',
            num: 72410,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1696930299000,
            payDate: 1696930299000,
            details: 'שכירות אוקטובר',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_72411',
            num: 72411,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1699612299000,
            payDate: 1699612299000,
            details: 'שכירות נובמבר',
            coin: 'שקל',
            total: 3600
        },
        {
            id: 'p_72412',
            num: 72412,
            frequency: 'חודשי',
            supplier: 'אליהו לוי',
            billNum: 47368,
            aim: 'שכר דירה',
            docDate: 1702204299000,
            payDate: 1702204299000,
            details: 'שכירות דצמבר',
            coin: 'שקל',
            total: 3600
        },
    ]
}