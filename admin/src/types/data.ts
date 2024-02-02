

export interface phDataRec {
    _id: string,
    username: string,
    email:string,
    date: string,
    ph:number,
    latitude: number,
    longitude: number,
    address: string,
    isShared: boolean,
}

export interface phDataRecUpload {
    username: string,
    email: string,
    date: string,
    ph: number,
    latitude: number,
    longitude: number,
    address: string,
    isShared: boolean,
}

export interface GetUserAllDataApiParams{
    username: string,
    email: string
}