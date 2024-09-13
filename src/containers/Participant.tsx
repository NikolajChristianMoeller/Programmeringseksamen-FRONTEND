import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useParticipant from "../hooks/useParticipant.tsx";

export default function Participant() {
    const {participant} = useParticipant();

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "disciplineId", headerName: "Discipline ID", flex: 2},
        {field: "fullName", headerName: "Participant Name", flex: 2},
        {field: "participantNumber", headerName: "Participant Number", flex: 3},
        {field: "gender", headerName: "Gender", flex: 4},
        {field: "ageGroup", headerName: "Age Group", flex: 5},
    ];

    const rows = participant.map((p) =>({
        id: p.id,
        disciplineId: p.disciplineId,
        fullName: p.fullName,
        participantNumber: p.participantNumber,
        gender: p.gender,
        ageGroup: p.ageGroup
    }))

    return (
        <>
            <Paper>
                <h2>All Participants</h2>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>

        </>
    );
}
