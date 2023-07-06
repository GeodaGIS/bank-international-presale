export interface Payment {
    id?: string,
    num: number,
    frequency: string,
    supplier: string,
    billNum: number,
    aim: string,
    docDate: number,
    payDate: number,
    details: string,
    coin: string,
    total: number
}