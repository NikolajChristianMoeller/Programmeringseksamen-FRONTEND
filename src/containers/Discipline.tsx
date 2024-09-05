import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useDiscipline from "../hooks/useDiscipline.tsx";

export default function Discipline() {
    const {discipline} = useDiscipline();

    const rows = discipline.map((p) =>({
        id: p.id,
        disciplineName: p.disciplineName,
        approxDuration: p.approxDuration,
        participants: p.numberOfParticipants
    }))

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "disciplineName", headerName: "Discipline Name", flex: 2},
        {field: "approxDuration", headerName: "Approximate Duration", flex: 3},
        {field: "participants", headerName: "Number of Participants", flex: 4},
    ]

    return (
        <>
            <Paper>
                <h2>All Disciplines</h2>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
        </>
    );
}
