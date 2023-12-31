import { Contract } from "../types/Contract";
import { StorageService } from "./StorageService"

export const ContractService = {
    QueryAll,
    // QueryById,
    // Create,
    // Update,
    // Delete
}

const { saveToStorage, loadFromStorage } = StorageService;


function QueryAll() {
    let allContractsJson = loadFromStorage('contracts') as string | null;
    if (!allContractsJson) {
        const initialContracts = getInitialContracts();
        saveToStorage('contracts', initialContracts);
        allContractsJson = loadFromStorage('contracts') as string;
    }
    const allContracts = JSON.parse(allContractsJson) as Contract[];
    return allContracts;
}



function getInitialContracts() {
    return [
        {
            id: 'c_123', // c from 'contract'
            rentContractId: 123,
            managementContractId: 5152,
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
            type: 'סניף',
            paymentsIds: []
        },
        {
            id: 'c_456',
            rentContractId: 456,
            managementContractId: 7439,
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
            type: 'סניף',
            paymentsIds: []
        },
        {
            id: 'c_756',
            rentContractId: 756,
            managementContractId: 8921,
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
            type: 'סניף',
            paymentsIds: ['p_7561']
        },
        {
            id: 'c_789',
            rentContractId: 789,
            managementContractId: 5813,
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
            type: 'חניון',
            paymentsIds: []
        },
        {
            id: 'c_547',
            rentContractId: 547,
            managementContractId: 1653,
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
            type: 'סניף',
            paymentsIds: ['p_5471']
        },
        {
            id: 'c_638',
            rentContractId: 638,
            managementContractId: 8429,
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
            type: 'משרדים',
            paymentsIds: []
        },
        {
            id: 'c_268',
            rentContractId: 268,
            managementContractId: 4827,
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
            type: 'כספומט',
            paymentsIds: []
        },
        {
            id: 'c_925',
            rentContractId: 925,
            managementContractId: 6384,
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
            type: 'סניף',
            paymentsIds: ['p_9251', 'p_9252', 'p_9253', 'p_9254']
        },
        {
            id: 'c_284',
            rentContractId: 284,
            managementContractId: 3961,
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
            type: 'חניון',
            paymentsIds: []
        },
        {
            id: 'c_682',
            rentContractId: 682,
            managementContractId: 9627,
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
            type: 'מחסן',
            paymentsIds: []
        },
        {
            id: 'c_529',
            rentContractId: 529,
            managementContractId: 1389,
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
            type: 'משרדים',
            paymentsIds: []
        },
        {
            id: 'c_621',
            rentContractId: 621,
            managementContractId: 3295,
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
            type: 'מחסן',
            paymentsIds: ['p_6211', 'p_6212', 'p_6213', 'p_6214']
        },
        {
            id: 'c_362',
            rentContractId: 362,
            managementContractId: 5299,
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
            type: 'סניף',
            paymentsIds: []
        },
        {
            id: 'c_533',
            rentContractId: 533,
            managementContractId: 2368,
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
            type: 'מחסן',
            paymentsIds: []
        },
        {
            id: 'c_632',
            rentContractId: 632,
            managementContractId: 6325,
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
            type: 'מחסן',
            paymentsIds: []
        },
        {
            id: 'c_824',
            rentContractId: 824,
            managementContractId: 1685,
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
            type: 'מחסן',
            paymentsIds: ['p_8241', 'p_8242', 'p_8243', 'p_8244']
        },
        {
            id: 'c_835',
            rentContractId: 835,
            managementContractId: 7264,
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
            type: 'משרדים',
            paymentsIds: []
        },
        {
            id: 'c_514',
            rentContractId: 514,
            managementContractId: 6528,
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
            type: 'כספומט',
            paymentsIds: []
        },
        {
            id: 'c_616',
            rentContractId: 616,
            managementContractId: 3681,
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
            type: 'כספומט',
            paymentsIds: []
        },
        {
            id: 'c_538',
            rentContractId: 538,
            managementContractId: 6854,
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
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1705314645000,
            approverName: 'אושרית גוטמן',
            type: 'סניף',
            paymentsIds: []
        },
        {
            id: 'c_825',
            rentContractId: 825,
            managementContractId: 6358,
            isInRent: true,
            ownerName: 'הבינלאומי',
            areaSize: 635,
            employeesCount: 60,
            areaSizePerEmployee: 10.58,
            monthleyNominalServiceFee: 3126,
            baseIndex: 252.35,
            monthleyIndexedServiceFee: 3526,
            totalExpenses: 50268,
            rentBeginsAt: 1672560697000,
            rentEndsAt: 1785481897000,
            closeExitAt: 1769847097000,
            priorNoticeMonthsCount: 6,
            priorNoticeAt: 1753945897000,
            optionEndsAt: 1748675497000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1717139497000,
            approverName: 'ירון הלוי',
            type: 'כספומט',
            paymentsIds: []
        },
        {
            id: 'c_658',
            rentContractId: 658,
            managementContractId: 5268,
            isInRent: false,
            ownerName: 'רווית הכהן',
            areaSize: 395,
            employeesCount: 35,
            areaSizePerEmployee: 11.28,
            monthleyNominalServiceFee: 3059,
            baseIndex: 302.39,
            monthleyIndexedServiceFee: 3659,
            totalExpenses: 51036,
            rentBeginsAt: 1675152697000,
            rentEndsAt: 1702627897000,
            closeExitAt: 1692083497000,
            priorNoticeMonthsCount: 3,
            priorNoticeAt: 1684134697000,
            optionEndsAt: 1682925097000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'פעיל',
            contractRenewalAt: 1675239097000,
            approverName: 'אושרית גוטמן',
            type: 'חניון',
            paymentsIds: []
        },
        {
            id: 'c_264',
            rentContractId: 264,
            managementContractId: 5369,
            isInRent: true,
            ownerName: 'הבינלאומי',
            areaSize: 402,
            employeesCount: 40,
            areaSizePerEmployee: 10.05,
            monthleyNominalServiceFee: 2968,
            baseIndex: 296.52,
            monthleyIndexedServiceFee: 4025,
            totalExpenses: 49523,
            rentBeginsAt: 1675239097000,
            rentEndsAt: 1698826297000,
            closeExitAt: 1696144297000,
            priorNoticeMonthsCount: 3,
            priorNoticeAt: 1688195497000,
            optionEndsAt: 1685603497000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'פעיל',
            contractRenewalAt: 1684134697000,
            approverName: 'אושרית גוטמן',
            type: 'סניף',
            paymentsIds: []
        },
        {
            id: 'c_126',
            rentContractId: 126,
            managementContractId: 6328,
            isInRent: false,
            ownerName: 'הבינלאומי',
            areaSize: 522,
            employeesCount: 51,
            areaSizePerEmployee: 10.23,
            monthleyNominalServiceFee: 3026,
            baseIndex: 302.68,
            monthleyIndexedServiceFee: 4236,
            totalExpenses: 50236,
            rentBeginsAt: 1641024697000,
            rentEndsAt: 1727766697000,
            closeExitAt: 1722496297000,
            priorNoticeMonthsCount: 2,
            priorNoticeAt: 1717225897000,
            optionEndsAt: 1714547497000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1706775097000,
            approverName: 'ירון הלוי',
            type: 'סניף',
            paymentsIds: []
        },
        {
            id: 'c_368',
            rentContractId: 368,
            managementContractId: 7126,
            isInRent: true,
            ownerName: 'הבינלאומי',
            areaSize: 295,
            employeesCount: 25,
            areaSizePerEmployee: 11.8,
            monthleyNominalServiceFee: 3021,
            baseIndex: 292.68,
            monthleyIndexedServiceFee: 4023,
            totalExpenses: 51023,
            rentBeginsAt: 1672560697000,
            rentEndsAt: 1697353897000,
            closeExitAt: 1694761897000,
            priorNoticeMonthsCount: 1,
            priorNoticeAt: 1692083497000,
            optionEndsAt: 1690873897000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1688195497000,
            approverName: 'שרון כספי',
            type: 'מחסן',
            paymentsIds: []
        },
        {
            id: 'c_482',
            rentContractId: 482,
            managementContractId: 6329,
            isInRent: false,
            ownerName: 'הבינלאומי',
            areaSize: 285,
            employeesCount: 25,
            areaSizePerEmployee: 11.4,
            monthleyNominalServiceFee: 3562,
            baseIndex: 256.25,
            monthleyIndexedServiceFee: 4195,
            totalExpenses: 50265,
            rentBeginsAt: 1672560697000,
            rentEndsAt: 1704010297000,
            closeExitAt: 1700035897000,
            priorNoticeMonthsCount: 3,
            priorNoticeAt: 1692083497000,
            optionEndsAt: 1689405097000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1688195497000,
            approverName: 'אושרית גוטמן',
            type: 'סניף',
            paymentsIds: [
                'p_4821', 'p_4822', 'p_4823', 'p_4824',
                'p_4825', 'p_4826', 'p_4827', 'p_4828',
                'p_4829', 'p_48210', 'p_48211', 'p_48212'
            ]
        },
        {
            id: 'c_526',
            rentContractId: 526,
            managementContractId: 7265,
            isInRent: true,
            ownerName: 'שמעון כחילה',
            areaSize: 402,
            employeesCount: 38,
            areaSizePerEmployee: 10.58,
            monthleyNominalServiceFee: 3426,
            baseIndex: 265.45,
            monthleyIndexedServiceFee: 3952,
            totalExpenses: 48935,
            rentBeginsAt: 1673770297000,
            rentEndsAt: 1736928697000,
            closeExitAt: 1735719097000,
            priorNoticeMonthsCount: 1,
            priorNoticeAt: 1733040697000,
            optionEndsAt: 1730448697000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1725174697000,
            approverName: 'שרון כספי',
            type: 'כספומט',
            paymentsIds: []
        },
        {
            id: 'c_601',
            rentContractId: 601,
            managementContractId: 6952,
            isInRent: false,
            ownerName: 'הבינלאומי',
            areaSize: 500,
            employeesCount: 48,
            areaSizePerEmployee: 10.42,
            monthleyNominalServiceFee: 3526,
            baseIndex: 325.45,
            monthleyIndexedServiceFee: 3598,
            totalExpenses: 51265,
            rentBeginsAt: 1672560697000,
            rentEndsAt: 1702627897000,
            closeExitAt: 1700035897000,
            priorNoticeMonthsCount: 2,
            priorNoticeAt: 1694761897000,
            optionEndsAt: 1692083497000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'לא פעיל',
            contractRenewalAt: 1690873897000,
            approverName: 'אושרית גוטמן',
            type: 'סניף',
            paymentsIds: []
        },
        {
            id: 'c_724',
            rentContractId: 724,
            managementContractId: 6523,
            isInRent: true,
            ownerName: 'ערן כהן',
            areaSize: 325,
            employeesCount: 31,
            areaSizePerEmployee: 10.48,
            monthleyNominalServiceFee: 3265,
            baseIndex: 365.25,
            monthleyIndexedServiceFee: 3568,
            totalExpenses: 48526,
            rentBeginsAt: 1672560697000,
            rentEndsAt: 1704096697000,
            closeExitAt: 1701418297000,
            priorNoticeMonthsCount: 1,
            priorNoticeAt: 1698826297000,
            optionEndsAt: 1696144297000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1693552297000,
            approverName: 'מיכל היימן',
            type: 'מחסן',
            paymentsIds: [
                'p_7241', 'p_7242', 'p_7243', 'p_7244',
                'p_7245', 'p_7246', 'p_7247', 'p_7248',
                'p_7249', 'p_72410', 'p_72411', 'p_72412'
            ]
        },
        {
            id: 'c_851',
            rentContractId: 851,
            managementContractId: 9256,
            isInRent: false,
            ownerName: 'הבינלאומי',
            areaSize: 396,
            employeesCount: 35,
            areaSizePerEmployee: 11.34,
            monthleyNominalServiceFee: 3162,
            baseIndex: 356.25,
            monthleyIndexedServiceFee: 3269,
            totalExpenses: 51025,
            rentBeginsAt: 1672560697000,
            rentEndsAt: 1735719097000,
            closeExitAt: 1727766697000,
            priorNoticeMonthsCount: 3,
            priorNoticeAt: 1719817897000,
            optionEndsAt: 1714547497000,
            moreExitPointsAndServiceFeeChange: '',
            contractStatus: 'ממתין לאישור',
            contractRenewalAt: 1709280697000,
            approverName: 'ירון הלוי',
            type: 'משרדים',
            paymentsIds: []
        }
    ] as Contract[]
}