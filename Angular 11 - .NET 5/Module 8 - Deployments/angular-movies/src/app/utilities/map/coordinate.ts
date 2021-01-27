export interface coordinatesMap {
    latitude: number;
    longitude: number;
}

export interface coordinatesMapWithMessage extends coordinatesMap{
    message: string;
}