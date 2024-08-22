export type TTimeSlot = {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
};

export type TTimeSlotCreateAndUpdate = {
    id?: number | null;
    date: string;
    startTime: string;
    endTime: string;
};