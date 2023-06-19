export const StorageService = {
    saveToStorage,
    loadFromStorage
}

function saveToStorage(key: string, value: any) {
    const valueJson = JSON.stringify(value);
    localStorage.setItem(key, valueJson);
}

function loadFromStorage(key: string) {
    return localStorage.getItem(key);
}