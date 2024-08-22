import { Button, Paper } from "@mui/material";
import {DataGrid, GridCellParams} from "@mui/x-data-grid";
import { useState } from "react";
import PostDisciplineDialog from "../components/discipline/PostDisciplineDialog.tsx";
import useDiscipline from "../hooks/useDiscipline.tsx";
import {TDiscipline} from "../types/discipline.type.ts";
import PutDisciplineDialog from "../components/discipline/PutDisciplineDialog.tsx";

export default function Discipline() {
    const {discipline, createDiscipline, updateDiscipline} = useDiscipline();
    const [openPost, setOpenPost] = useState<boolean>(false);
    const [openPut, setOpenPut] = useState<boolean>(false);

    const defaultDiscipline: TDiscipline = {
        id: 0,
        disciplineName: "",
        approxDuration: "",
        numberOfParticipants: 0
    }

    const [selectedDiscipline, setSelectedDiscipline] = useState<TDiscipline>(defaultDiscipline)

    const handleOpenPost = () => {
        setOpenPost(true)
    }

    const handleOpenPut = (id: number) => {
        const selectedRowDiscipline = discipline.find(
            (discipline) => discipline.id === id
        );
        if (selectedRowDiscipline) {
            setSelectedDiscipline(selectedRowDiscipline);
            setOpenPut(true);
        }
    };

    const handleClose = () => {
        setOpenPost(false);
        setOpenPut(false);
    }

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
        {field: "update",
            headerName: "Update",
            flex: 5,
            renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleOpenPut(params.row.id as number)}
                >
                    Update
                </Button>
            )
        }
    ]

    return (
        <>
            <Paper>
                <Button onClick={handleOpenPost}>
                    Create new Discipline
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
            
            <PostDisciplineDialog
                open={openPost}
                handleClose={handleClose}
                createDiscipline={createDiscipline}
            />

            <PutDisciplineDialog
                open={openPut}
                handleClose={handleClose}
                updateDiscipline={updateDiscipline}
                selectedDiscipline={selectedDiscipline}
            />
        </>
    );
}