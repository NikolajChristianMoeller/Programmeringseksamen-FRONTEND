export type TEvent = {
    id: number;
    eventName: string
    minimumDuration: string;
    maximumParticipants: string;
};

export type TEventCreateAndUpdate = {
    id?: number | null;
    eventName: string;
    minimumDuration: string;
    maximumParticipants: string;
};