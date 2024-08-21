export type TTest1 = {
    id: number;
    name: string
    address: string;
    city: string;
    zip: string;
    country: string;
    created: string;
    updated: string;
    numberOfRooms: number;
};

export type TTest1CreateAndUpdate = {
    id?: number | null;
    name: string;
    address: string;
    city: string;
    zip: string;
    country: string;
};