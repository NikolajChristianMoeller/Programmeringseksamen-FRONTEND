export type TEventCreateAndUpdate = {
    id?: number | null;
    eventName: string;
    minimumDuration: string;
    participantGender: string;
    participantAgeGroup: string;
    maximumParticipants: string;
    disciplineId: number;
    trackId: number;
    timeSlotId: number;
    participantId: number;
};
