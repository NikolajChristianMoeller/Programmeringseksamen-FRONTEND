type TGender = "MALE" | "FEMALE" | "OTHER";
type TAgeGroup = "KIDS" | "YOUTH" | "JUNIOR" | "ADULT" | "SENIOR";

export type TParticipant = {
    id: number;
    fullName: string
    participantNumber: string;
    gender: TGender;
    ageGroup: TAgeGroup;
};

export type TParticipantCreateAndUpdate = {
    id?: number | null;
    disciplineName: string;
    approxDuration: string;
};