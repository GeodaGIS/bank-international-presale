import { Asset } from "../types/Asset";
import { StorageService } from "./StorageService"
import { UtilService } from "./UtilService";

export const AssetService = {
    QueryAll,
    // QueryById,
    // Create,
    // Update,
    // Delete
}

const { saveToStorage, loadFromStorage } = StorageService;
const { makeId } = UtilService;


function QueryAll() {
    let allAssetsJson = loadFromStorage('assets') as string | null;
    if (!allAssetsJson) {
        const initialAssets = getInitialAssets();
        saveToStorage('assets', initialAssets);
        allAssetsJson = loadFromStorage('assets') as string;
    }
    const allAssets = JSON.parse(allAssetsJson) as Asset[];
    return allAssets;
}



function getInitialAssets() {
    return [
        {
            id: makeId(),
            branchNum: 1,
            branchName: 'צפת',
            rentContractId: 123,
            managementContractId: 5152,
            bankName: 'פאגי',
            address: 'הרצל 14',
            town: 'צפת',
            isInRent: false,
            ownerName: 'יצחק לוי',
            areaSize: 220,
            employeesCount: 25,
            areaSizePerEmployee: 8.8,
            monthleyNominalServiceFee: 1240,
            baseIndex: 584.54,
            monthleyIndexedServiceFee: 1240,
            totalExpenses: 50000,
            rentBeginsAt: 1675202461000,
            rentEndsAt: 1832968741000,
            closeExitAt: 1708898399000,
            priorNoticeMonthsCount: 6,
            priorNoticeAt: 1848689941000,
            optionEndsAt: 1794779941000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1813093141000,
            approverName: 'אייל סגל',
            type: 'סניף'
        },
        {
            id: makeId(),
            branchNum: 2,
            branchName: 'טבריה',
            rentContractId: 456,
            managementContractId: 7439,
            bankName: 'הבינלאומי',
            address: 'בר כוכבא 56',
            town: 'טבריה',
            isInRent: true,
            ownerName: 'הבינלאומי',
            areaSize: 280,
            employeesCount: 32,
            areaSizePerEmployee: 8.75,
            monthleyNominalServiceFee: 1320,
            baseIndex: 320.58,
            monthleyIndexedServiceFee: 1580,
            totalExpenses: 40500,
            rentBeginsAt: 1725202461000,
            rentEndsAt: 1932968741000,
            closeExitAt: 1880923541000,
            priorNoticeMonthsCount: 8,
            priorNoticeAt: 1865368741000,
            optionEndsAt: 1854779941000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'פעיל',
            contractRenewalAt: 1891093141000,
            approverName: 'נגה סילמן',
            type: 'סניף'
        },
        {
            id: makeId(),
            branchNum: 3,
            branchName: 'חיפה',
            rentContractId: 756,
            managementContractId: 8921,
            bankName: 'הבינלאומי למשכנתאות',
            address: 'ההסתדרות 15',
            town: 'חיפה',
            isInRent: true,
            ownerName: 'שלומית כהן',
            areaSize: 350,
            employeesCount: 35,
            areaSizePerEmployee: 10,
            monthleyNominalServiceFee: 1310,
            baseIndex: 305.69,
            monthleyIndexedServiceFee: 1490,
            totalExpenses: 45900,
            rentBeginsAt: 1673906341000,
            rentEndsAt: 1703068245000,
            closeExitAt: 1703932245000,
            priorNoticeMonthsCount: 3,
            priorNoticeAt: 1696066245000,
            optionEndsAt: 1701340245000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'לא פעיל',
            contractRenewalAt: 1702204245000,
            approverName: 'נגה סילמן',
            type: 'סניף'
        },
        {
            id: makeId(),
            branchNum: 4,
            branchName: 'אילת',
            rentContractId: 789,
            managementContractId: 5813,
            bankName: 'פאגי',
            address: 'בן גוריון 43',
            town: 'אילת',
            isInRent: false,
            ownerName: 'אריאל אייכלר',
            areaSize: 295,
            employeesCount: 31,
            areaSizePerEmployee: 9.52,
            monthleyNominalServiceFee: 1258,
            baseIndex: 389.53,
            monthleyIndexedServiceFee: 1590,
            totalExpenses: 39300,
            rentBeginsAt: 1673906821000,
            rentEndsAt: 1704018645000,
            closeExitAt: 1755250245000,
            priorNoticeMonthsCount: 4,
            priorNoticeAt: 1690709445000,
            optionEndsAt: 1695893445000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1701426645000,
            approverName: 'טל רוזנפלד',
            type: 'חניון'
        },
        {
            id: makeId(),
            branchNum: 5,
            branchName: 'ירושלים',
            rentContractId: 547,
            managementContractId: 1653,
            bankName: 'הבינלאומי',
            address: 'הלני המלכה 8',
            town: 'ירושלים',
            isInRent: true,
            ownerName: 'הבינלאומי',
            areaSize: 391,
            employeesCount: 42,
            areaSizePerEmployee: 9.3,
            monthleyNominalServiceFee: 1825,
            baseIndex: 458.29,
            monthleyIndexedServiceFee: 1628,
            totalExpenses: 52028,
            rentBeginsAt: 1704105045000,
            rentEndsAt: 1798713045000,
            closeExitAt: 1790760645000,
            priorNoticeMonthsCount: 5,
            priorNoticeAt: 1777541445000,
            optionEndsAt: 1765794645000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1794738645000,
            approverName: 'ענת עמרם',
            type: 'סניף'
        },
        {
            id: makeId(),
            branchNum: 6,
            branchName: 'תל אביב',
            rentContractId: 638,
            managementContractId: 8429,
            bankName: 'הבינלאומי למשכנתאות',
            address: 'בורוכוב 19',
            town: 'תל אביב',
            isInRent: false,
            ownerName: 'הבינלאומי',
            areaSize: 524,
            employeesCount: 48,
            areaSizePerEmployee: 10.92,
            monthleyNominalServiceFee: 2055,
            baseIndex: 965.76,
            monthleyIndexedServiceFee: 2458,
            totalExpenses: 71539,
            rentBeginsAt: 1673778645000,
            rentEndsAt: 1704018645000,
            closeExitAt: 1708034399000,
            priorNoticeMonthsCount: 2,
            priorNoticeAt: 1696066245000,
            optionEndsAt: 1692523845000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'פעיל',
            contractRenewalAt: 1703068245000,
            approverName: 'ענת עמרם',
            type: 'משרדים'
        },
        {
            id: makeId(),
            branchNum: 7,
            branchName: 'הרצליה פיתוח',
            rentContractId: 268,
            managementContractId: 4827,
            bankName: 'פאגי',
            address: 'מדינת היהודים 14',
            town: 'הרצליה',
            isInRent: true,
            ownerName: 'גיא רוזובסקי',
            areaSize: 684,
            employeesCount: 51,
            areaSizePerEmployee: 13.41,
            monthleyNominalServiceFee: 2954,
            baseIndex: 762.29,
            monthleyIndexedServiceFee: 3219,
            totalExpenses: 62581,
            rentBeginsAt: 1676111445000,
            rentEndsAt: 1701340245000,
            closeExitAt: 1735727445000,
            priorNoticeMonthsCount: 3,
            priorNoticeAt: 1690709445000,
            optionEndsAt: 1686389445000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'לא פעיל',
            contractRenewalAt: 1698834645000,
            approverName: 'נגה סילמן',
            type: 'כספומט'
        },
        {
            id: makeId(),
            branchNum: 8,
            branchName: 'חדרה',
            rentContractId: 925,
            managementContractId: 6384,
            bankName: 'פאגי',
            address: 'טרומפלדור 7',
            town: 'חדרה',
            isInRent: false,
            ownerName: 'הבינלאומי',
            areaSize: 528,
            employeesCount: 45,
            areaSizePerEmployee: 11.73,
            monthleyNominalServiceFee: 2680,
            baseIndex: 628.29,
            monthleyIndexedServiceFee: 3128,
            totalExpenses: 58932,
            rentBeginsAt: 1672569045000,
            rentEndsAt: 1767177045000,
            closeExitAt: 1761906645000,
            priorNoticeMonthsCount: 8,
            priorNoticeAt: 1738405845000,
            optionEndsAt: 1754040645000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'פעיל',
            contractRenewalAt: 1761993045000,
            approverName: 'טל רוזנפלד',
            type: 'סניף'
        },
        {
            id: makeId(),
            branchNum: 9,
            branchName: 'אשקלון',
            rentContractId: 284,
            managementContractId: 3961,
            bankName: 'הבינלאומי למשכנתאות',
            address: 'הנשיא 40',
            town: 'אשקלון',
            isInRent: true,
            ownerName: 'שלמה ריקן',
            areaSize: 436,
            employeesCount: 30,
            areaSizePerEmployee: 14.53,
            monthleyNominalServiceFee: 2950,
            baseIndex: 652.46,
            monthleyIndexedServiceFee: 3520,
            totalExpenses: 59238,
            rentBeginsAt: 1672569045000,
            rentEndsAt: 1733049045000,
            closeExitAt: 1730457045000,
            priorNoticeMonthsCount: 6,
            priorNoticeAt: 1714555845000,
            optionEndsAt: 1727775045000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1730457045000,
            approverName: 'טל רוזנפלד',
            type: 'חניון'
        },
        {
            id: makeId(),
            branchNum: 10,
            branchName: 'אשדוד',
            rentContractId: 682,
            managementContractId: 9627,
            bankName: 'הבינלאומי',
            address: 'שמואל הנגיד 35',
            town: 'אשדוד',
            isInRent: false,
            ownerName: 'אלון רמון',
            areaSize: 532,
            employeesCount: 54,
            areaSizePerEmployee: 9.85,
            monthleyNominalServiceFee: 3210,
            baseIndex: 536.85,
            monthleyIndexedServiceFee: 3950,
            totalExpenses: 51239,
            rentBeginsAt: 1672569045000,
            rentEndsAt: 1702636245000,
            closeExitAt: 1688203845000,
            priorNoticeMonthsCount: 2,
            priorNoticeAt: 1682933445000,
            optionEndsAt: 1690882245000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1696152645000,
            approverName: 'טל רוזנפלד',
            type: 'מחסן'
        },
        {
            id: makeId(),
            branchNum: 11,
            branchName: 'כרמיאל',
            rentContractId: 529,
            managementContractId: 1389,
            bankName: 'פאגי',
            address: 'יודפת 3',
            town: 'כרמיאל',
            isInRent: true,
            ownerName: 'חן גינזבורג',
            areaSize: 495,
            employeesCount: 50,
            areaSizePerEmployee: 9.9,
            monthleyNominalServiceFee: 2540,
            baseIndex: 632.02,
            monthleyIndexedServiceFee: 3150,
            totalExpenses: 45309,
            rentBeginsAt: 1735727445000,
            rentEndsAt: 1702636245000,
            closeExitAt: 1767177045000,
            priorNoticeMonthsCount: 3,
            priorNoticeAt: 1759224645000,
            optionEndsAt: 1756546245000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1696152645000,
            approverName: 'שחר כהן',
            type: 'משרדים'
        },
        {
            id: makeId(),
            branchNum: 12,
            branchName: 'עכו',
            rentContractId: 621,
            managementContractId: 3295,
            bankName: 'פאגי',
            address: 'האורן 19',
            town: 'עכו',
            isInRent: true,
            ownerName: 'שירלי אופנהיים',
            areaSize: 295,
            employeesCount: 25,
            areaSizePerEmployee: 11.8,
            monthleyNominalServiceFee: 2680,
            baseIndex: 523.85,
            monthleyIndexedServiceFee: 2950,
            totalExpenses: 51308,
            rentBeginsAt: 1673778645000,
            rentEndsAt: 1702636245000,
            closeExitAt: 1700044245000,
            priorNoticeMonthsCount: 2,
            priorNoticeAt: 1694770245000,
            optionEndsAt: 1690882245000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1698834645000,
            approverName: 'טל רוזנפלד',
            type: 'מחסן'
        },
        {
            id: makeId(),
            branchNum: 13,
            branchName: 'ראשון לציון',
            rentContractId: 362,
            managementContractId: 5299,
            bankName: 'הבינלאומי למשכנתאות',
            address: 'שמריהו לוין 23',
            town: 'ראשון לציון',
            isInRent: true,
            ownerName: 'הבינלאומי',
            areaSize: 302,
            employeesCount: 30,
            areaSizePerEmployee: 10.06,
            monthleyNominalServiceFee: 3520,
            baseIndex: 632.25,
            monthleyIndexedServiceFee: 4258,
            totalExpenses: 42362,
            rentBeginsAt: 1672569045000,
            rentEndsAt: 1703759445000,
            closeExitAt: 1706219999000,
            priorNoticeMonthsCount: 5,
            priorNoticeAt: 1685266245000,
            optionEndsAt: 1693215045000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1696152645000,
            approverName: 'נגה סילמן',
            type: 'סניף'
        },
        {
            id: makeId(),
            branchNum: 14,
            branchName: 'רעננה',
            rentContractId: 533,
            managementContractId: 2368,
            bankName: 'פאגי',
            address: 'אחוזה 102',
            town: 'רעננה',
            isInRent: false,
            ownerName: 'מוחמד חלאילה',
            areaSize: 325,
            employeesCount: 41,
            areaSizePerEmployee: 7.92,
            monthleyNominalServiceFee: 2685,
            baseIndex: 326.59,
            monthleyIndexedServiceFee: 2952,
            totalExpenses: 51236,
            rentBeginsAt: 1672569045000,
            rentEndsAt: 1748770245000,
            closeExitAt: 1698661845000,
            priorNoticeMonthsCount: 4,
            priorNoticeAt: 1727775045000,
            optionEndsAt: 1714555845000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'לא פעיל',
            contractRenewalAt: 1696152645000,
            approverName: 'טל רוזנפלד',
            type: 'מחסן'
        },
        {
            id: makeId(),
            branchNum: 15,
            branchName: 'עפולה',
            rentContractId: 632,
            managementContractId: 6325,
            bankName: 'הבינלאומי',
            address: 'ויצמן 42',
            town: 'עפולה',
            isInRent: false,
            ownerName: 'ערן סוקולוב',
            areaSize: 425,
            employeesCount: 38,
            areaSizePerEmployee: 11.18,
            monthleyNominalServiceFee: 2698,
            baseIndex: 256.59,
            monthleyIndexedServiceFee: 2865,
            totalExpenses: 42589,
            rentBeginsAt: 1672569045000,
            rentEndsAt: 1701340245000,
            closeExitAt: 1698661845000,
            priorNoticeMonthsCount: 2,
            priorNoticeAt: 1693387845000,
            optionEndsAt: 1690709445000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1689413445000,
            approverName: 'נגה סילמן',
            type: 'מחסן'
        },
        {
            id: makeId(),
            branchNum: 16,
            branchName: 'נהריה',
            rentContractId: 824,
            managementContractId: 1685,
            bankName: 'פאגי',
            address: 'הגעתון 45',
            town: 'נהריה',
            isInRent: true,
            ownerName: 'שגיא פורת',
            areaSize: 385,
            employeesCount: 35,
            areaSizePerEmployee: 11,
            monthleyNominalServiceFee: 4256,
            baseIndex: 312.25,
            monthleyIndexedServiceFee: 4532,
            totalExpenses: 54235,
            rentBeginsAt: 1675247445000,
            rentEndsAt: 1698834645000,
            closeExitAt: 1696152645000,
            priorNoticeMonthsCount: 2,
            priorNoticeAt: 1690882245000,
            optionEndsAt: 1689845445000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1689413445000,
            approverName: 'ענת עמרם',
            type: 'מחסן'
        },
        {
            id: makeId(),
            branchNum: 17,
            branchName: 'באר שבע',
            rentContractId: 835,
            managementContractId: 7264,
            bankName: 'הבינלאומי למשכנתאות',
            address: 'כצנלסון 14',
            town: 'באר שבע',
            isInRent: false,
            ownerName: 'הבינלאומי',
            areaSize: 402,
            employeesCount: 45,
            areaSizePerEmployee: 8.93,
            monthleyNominalServiceFee: 3598,
            baseIndex: 245.56,
            monthleyIndexedServiceFee: 3952,
            totalExpenses: 48629,
            rentBeginsAt: 1672569045000,
            rentEndsAt: 1765794645000,
            closeExitAt: 1701340245000,
            priorNoticeMonthsCount: 6,
            priorNoticeAt: 1738405845000,
            optionEndsAt: 1734258645000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1723714245000,
            approverName: 'נגה סילמן',
            type: 'משרדים'
        },
        {
            id: makeId(),
            branchNum: 18,
            branchName: 'בית שאן',
            rentContractId: 514,
            managementContractId: 6528,
            bankName: 'הבינלאומי',
            address: 'שאול המלך 4',
            town: 'בית שאן',
            isInRent: false,
            ownerName: 'רווית מכלוף',
            areaSize: 358,
            employeesCount: 31,
            areaSizePerEmployee: 11.54,
            monthleyNominalServiceFee: 4652,
            baseIndex: 153.58,
            monthleyIndexedServiceFee: 4985,
            totalExpenses: 35698,
            rentBeginsAt: 1705314645000,
            rentEndsAt: 1734258645000,
            closeExitAt: 1731666645000,
            priorNoticeMonthsCount: 6,
            priorNoticeAt: 1715765445000,
            optionEndsAt: 1711963845000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1706783445000,
            approverName: 'נגה סילמן',
            type: 'כספומט'
        },
        {
            id: makeId(),
            branchNum: 19,
            branchName: 'נצרת',
            rentContractId: 616,
            managementContractId: 3681,
            bankName: 'פאגי',
            address: 'הגליל 34',
            town: 'נצרת',
            isInRent: true,
            ownerName: 'אחמד סבע',
            areaSize: 268,
            employeesCount: 29,
            areaSizePerEmployee: 9.24,
            monthleyNominalServiceFee: 3569,
            baseIndex: 214.56,
            monthleyIndexedServiceFee: 3684,
            totalExpenses: 42369,
            rentBeginsAt: 1676457045000,
            rentEndsAt: 1702636245000,
            closeExitAt: 1715806799000,
            priorNoticeMonthsCount: 2,
            priorNoticeAt: 1694770245000,
            optionEndsAt: 1693560645000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1690882245000,
            approverName: 'טל רוזנפלד',
            type: 'כספומט'
        },
        {
            id: makeId(),
            branchNum: 20,
            branchName: 'קצרין',
            rentContractId: 538,
            managementContractId: 6854,
            bankName: 'הבינלאומי',
            address: 'דליות 12',
            town: 'קצרין',
            isInRent: false,
            ownerName: 'הבינלאומי',
            areaSize: 345,
            employeesCount: 35,
            areaSizePerEmployee: 9.86,
            monthleyNominalServiceFee: 3256,
            baseIndex: 245.26,
            monthleyIndexedServiceFee: 3487,
            totalExpenses: 51238,
            rentBeginsAt: 1641033045000,
            rentEndsAt: 1767177045000,
            closeExitAt: 1751275845000,
            priorNoticeMonthsCount: 3,
            priorNoticeAt: 1743327045000,
            optionEndsAt: 1722418245000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'פעיל',
            contractRenewalAt: 1705314645000,
            approverName: 'טל רוזנפלד',
            type: 'סניף'
        },
    ] as Asset[]
}