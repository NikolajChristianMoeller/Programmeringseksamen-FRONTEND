export type TDiscipline = {
    id: number;
    disciplineName: string;
    approxDuration: string;
    numberOfParticipants: number;
};

export type TDisciplineCreateAndUpdate = {
    id?: number | null;
    disciplineName: string;
    approxDuration: string;

};