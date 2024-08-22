import { Button, Paper } from "@mui/material";
import {DataGrid, GridCellParams} from "@mui/x-data-grid";
import { useState } from "react";
import PostParticipantDialog from "../components/participant/PostParticipantDialog.tsx";
import useParticipant from "../hooks/useParticipant.tsx";
import {TParticipant} from "../types/participant.type.ts";
import PutParticipantDialog from "../components/participant/PutParticipantDialog.tsx";

//const genderArr: TGender[] = ["MALE", "FEMALE", "OTHER"];

export default function Participant() {
    const {participant, createParticipant, updateParticipant} = useParticipant();
    const [openPost, setOpenPost] = useState<boolean>(false);
    const [openPut, setOpenPut] = useState<boolean>(false);

    const defaultParticipant: TParticipant = {
        id: 0,
        fullName: "",
        participantNumber: 0,
        gender: "OTHER",
        ageGroup: "KIDS",
    }

    const [selectedParticipant, setSelectedParticipant] = useState<TParticipant>(defaultParticipant)

    const handleOpenPost = () => {
        setOpenPost(true)
    }

    const handleOpenPut = (id: number) => {
        const selectedRowParticipant = participant.find(
            (participant) => participant.id === id
        );
        if (selectedRowParticipant) {
            setSelectedParticipant(selectedRowParticipant);
            setOpenPut(true);
        }
    };

    const handleClose = () => {
        setOpenPost(false);
        setOpenPut(false);
    }


    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "fullName", headerName: "Participant Name", flex: 2},
        {field: "participantNumber", headerName: "Participant Number", flex: 3},
        {field: "gender", headerName: "Gender", flex: 4},
        {field: "ageGroup", headerName: "Age Group", flex: 5},
        {
            field: "update",
            headerName: "Update",
            flex: 6,
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
                <Button onClick={handleOpenPost}>
                    Create new Participant
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>

            <PostParticipantDialog
                open={openPost}
                handleClose={handleClose}
                createParticipant={createParticipant}
                //genderArr={genderArr}
            />

            <PutParticipantDialog
                open={openPut}
                handleClose={handleClose}
                updateParticipant={updateParticipant}
                //genderArr={genderArr}
                selectedParticipant={selectedParticipant}
            />
        </>
    );
}