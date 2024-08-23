import { Paper } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import { useState } from "react";
import useDiscipline from "../hooks/useDiscipline.tsx";
import {TDiscipline} from "../types/discipline.type.ts";

export default function Discipline() {
    const {discipline} = useDiscipline();

    const defaultDiscipline: TDiscipline = {
        id: 0,
        disciplineName: "",
        approxDuration: "",
        numberOfParticipants: 0
    }

    const [selectedDiscipline] = useState<TDiscipline>(defaultDiscipline);


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
                <DataGrid columns={columns} rows={rows}/>
            </Paper>


        </>
    );
}