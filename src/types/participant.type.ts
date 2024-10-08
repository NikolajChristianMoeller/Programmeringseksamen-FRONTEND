export type TGender = "MALE" | "FEMALE" | "OTHER";
export type TAgeGroup = "KIDS" | "YOUTH" | "JUNIOR" | "ADULT" | "SENIOR";

export type TParticipant = {
    id: number;
    disciplineId: number;
    fullName: string
    participantNumber: number;
    gender: TGender;
    ageGroup: TAgeGroup;
};

export type TParticipantCreateAndUpdate = {
    id?: number | null;
    disciplineId: number;
    fullName: string;
    participantNumber: number;
    gender: TGender;
    ageGroup: TAgeGroup;
};