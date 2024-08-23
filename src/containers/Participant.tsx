import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import useParticipant from "../hooks/useParticipant.tsx";
import {TGender, TParticipant} from "../types/participant.type.ts";

const genderArr: TGender[] = ["MALE", "FEMALE", "OTHER"];

export default function Participant() {
    const {participant} = useParticipant();

    const defaultParticipant: TParticipant = {
        id: 0,
        fullName: "",
        participantNumber: 0,
        gender: "OTHER",
        ageGroup: "KIDS",
    }

    const [selectedParticipant, setSelectedParticipant] =
        useState<TParticipant>(defaultParticipant);

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "fullName", headerName: "Participant Name", flex: 2},
        {field: "participantNumber", headerName: "Participant Number", flex: 3},
        {field: "gender", headerName: "Gender", flex: 4},
        {field: "ageGroup", headerName: "Age Group", flex: 5},
    ];

    const rows = participant.map((p) =>({
        id: p.id,
        fullName: p.fullName,
        participantNumber: p.participantNumber,
        gender: p.gender,
        ageGroup: p.ageGroup
    }))

    return (
        <>
            <Paper>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>

        </>
    );
}