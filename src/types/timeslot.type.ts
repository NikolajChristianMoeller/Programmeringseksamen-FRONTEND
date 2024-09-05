import { TEvent } from "./event.type.ts";

export type TTimeSlot = {
    id: number;
    date: string;
    startTime: string;
    endTime: string;
    events: TEvent[];
};

export type TTimeSlotCreateAndUpdate = {
    id?: number | null;
    date: string;
    startTime: string;
    endTime: string;
    events: TEvent[];
};