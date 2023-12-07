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
            id: makeId('a'), // a from 'asset'
            branchNum: 1,
            branchName: 'צפת',
            bankName: 'פאגי',
            address: 'הרצל 14',
            town: 'צפת',
            contractsIds: ['c_123']
        },
        {
            id: makeId('a'),
            branchNum: 2,
            branchName: 'טבריה',
            bankName: 'הבינלאומי',
            address: 'בר כוכבא 56',
            town: 'טבריה',
            contractsIds: ['c_456']
        },
        {
            id: makeId('a'),
            branchNum: 3,
            branchName: 'חיפה',
            bankName: 'מתף',
            address: 'ההסתדרות 15',
            town: 'חיפה',
            contractsIds: ['c_756']
        },
        {
            id: makeId('a'),
            branchNum: 4,
            branchName: 'אילת',
            bankName: 'פאגי',
            address: 'בן גוריון 43',
            town: 'אילת',
            contractsIds: ['c_789']
        },
        {
            id: makeId('a'),
            branchNum: 5,
            branchName: 'ירושלים',
            bankName: 'הבינלאומי',
            address: 'הלני המלכה 8',
            town: 'ירושלים',
            contractsIds: ['c_547']
        },
        {
            id: makeId('a'),
            branchNum: 6,
            branchName: 'תל אביב',
            bankName: 'הבינלאומי למשכנתאות',
            address: 'בורוכוב 19',
            town: 'תל אביב',
            contractsIds: ['c_638']
        },
        {
            id: makeId('a'),
            branchNum: 7,
            branchName: 'הרצליה פיתוח',
            bankName: 'פאגי',
            address: 'מדינת היהודים 14',
            town: 'הרצליה',
            contractsIds: ['c_268']
        },
        {
            id: makeId('a'),
            branchNum: 8,
            branchName: 'חדרה',
            bankName: 'מתף',
            address: 'טרומפלדור 7',
            town: 'חדרה',
            contractsIds: ['c_925']
        },
        {
            id: makeId('a'),
            branchNum: 9,
            branchName: 'אשקלון',
            bankName: 'מתף',
            address: 'הנשיא 40',
            town: 'אשקלון',
            contractsIds: ['c_284']
        },
        {
            id: makeId('a'),
            branchNum: 10,
            branchName: 'אשדוד',
            bankName: 'הבינלאומי',
            address: 'שמואל הנגיד 35',
            town: 'אשדוד',
            contractsIds: ['c_682']
        },
        {
            id: makeId('a'),
            branchNum: 11,
            branchName: 'כרמיאל',
            bankName: 'מסד',
            address: 'יודפת 3',
            town: 'כרמיאל',
            contractsIds: ['c_529']
        },
        {
            id: makeId('a'),
            branchNum: 12,
            branchName: 'עכו',
            bankName: 'פאגי',
            address: 'האורן 19',
            town: 'עכו',
            contractsIds: ['c_621']
        },
        {
            id: makeId('a'),
            branchNum: 13,
            branchName: 'ראשון לציון',
            bankName: 'הבינלאומי למשכנתאות',
            address: 'שמריהו לוין 23',
            town: 'ראשון לציון',
            contractsIds: ['c_362']
        },
        {
            id: makeId('a'),
            branchNum: 14,
            branchName: 'רעננה',
            bankName: 'מסד',
            address: 'אחוזה 102',
            town: 'רעננה',
            contractsIds: ['c_533']
        },
        {
            id: makeId('a'),
            branchNum: 15,
            branchName: 'עפולה',
            bankName: 'הבינלאומי',
            address: 'ויצמן 42',
            town: 'עפולה',
            contractsIds: ['c_632']
        },
        {
            id: makeId('a'),
            branchNum: 16,
            branchName: 'נהריה',
            bankName: 'פאגי',
            address: 'הגעתון 45',
            town: 'נהריה',
            contractsIds: ['c_824']
        },
        {
            id: makeId('a'),
            branchNum: 17,
            branchName: 'באר שבע',
            bankName: 'מסד',
            address: 'כצנלסון 14',
            town: 'באר שבע',
            contractsIds: ['c_835']
        },
        {
            id: makeId('a'),
            branchNum: 18,
            branchName: 'בית שאן',
            bankName: 'מתף',
            address: 'שאול המלך 4',
            town: 'בית שאן',
            contractsIds: ['c_514']
        },
        {
            id: makeId('a'),
            branchNum: 19,
            branchName: 'נצרת',
            bankName: 'פאגי',
            address: 'הגליל 34',
            town: 'נצרת',
            contractsIds: ['c_616']
        },
        {
            id: makeId('a'),
            branchNum: 20,
            branchName: 'קצרין',
            bankName: 'הבינלאומי',
            address: 'דליות 12',
            town: 'קצרין',
            contractsIds: ['c_538']
        },
        {
            id: makeId('a'),
            branchNum: 21,
            branchName: 'בית שמש',
            bankName: 'פאגי',
            address: 'הגולן 5',
            town: 'בית שמש',
            contractsIds: ['c_825']
        },
        {
            id: makeId('a'),
            branchNum: 22,
            branchName: 'אריאל',
            bankName: 'הבינלאומי למשכנתאות',
            address: 'הסביונים 14',
            town: 'אריאל',
            contractsIds: ['c_658']
        },
        {
            id: makeId('a'),
            branchNum: 23,
            branchName: 'נתניה',
            bankName: 'הבינלאומי',
            address: 'הרצל 52',
            town: 'נתניה',
            contractsIds: ['c_264']
        },
        {
            id: makeId('a'),
            branchNum: 24,
            branchName: 'קריות',
            bankName: 'מתף',
            address: 'הברושים 6',
            town: 'קרית ביאליק',
            contractsIds: ['c_126']
        },
        {
            id: makeId('a'),
            branchNum: 25,
            branchName: 'קיסריה',
            bankName: 'מסד',
            address: 'הדר 3',
            town: 'קיסריה',
            contractsIds: ['c_368']
        },
        {
            id: makeId('a'),
            branchNum: 26,
            branchName: 'ראש פינה',
            bankName: 'הבינלאומי למשכנתאות',
            address: 'החורש 1',
            town: 'ראש פינה',
            contractsIds: ['c_482']
        },
        {
            id: makeId('a'),
            branchNum: 27,
            branchName: 'מעלות',
            bankName: 'מתף',
            address: 'תובל 14',
            town: 'מעלות תרשיחא',
            contractsIds: ['c_526']
        },
        {
            id: makeId('a'),
            branchNum: 28,
            branchName: 'קרית שמונה',
            bankName: 'מסד',
            address: 'טרומפלדור 18',
            town: 'קרית שמונה',
            contractsIds: ['c_601']
        },
        {
            id: makeId('a'),
            branchNum: 29,
            branchName: 'אופקים',
            bankName: 'מסד',
            address: 'משה שרת 45',
            town: 'אופקים',
            contractsIds: ['c_724']
        },
        {
            id: makeId('a'),
            branchNum: 30,
            branchName: 'נס ציונה',
            bankName: 'הבינלאומי',
            address: 'הבנים 24',
            town: 'נס ציונה',
            contractsIds: ['c_851']
        }
    ] as Asset[]
}