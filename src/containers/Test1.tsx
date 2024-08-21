import { Button, Paper } from "@mui/material";
import { TTest1 } from "../types/test1.type.ts";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import PostTest1Dialog from "../components/test1/PostTest1Dialog.tsx";
import PutTest1Dialog from "../components/test1/PutTest1Dialog.tsx";
import useTest1 from "../hooks/useTest1.tsx";

export default function Test1() {
    const {test1, createTest1, updateTest1, deleteTest1} = useTest1();
    const [openPost, setOpenPost] = useState(false);
    const [openPut, setOpenPut] = useState(false);

    const defaultParticipant: TTest1 = {
        id: 0,
        name: "",
        address: "",
        city: "",
        zip: "",
        country: "",
        created: "",
        updated: "",
        numberOfRooms: 0
    }

    const [selectedTest1, setSelectedTest1] = useState<TTest1>(defaultParticipant)

    const handleOpenPost = () => {
        setOpenPost(true)
    }

    const handleOpenPut = (id: number) => {
        const selectedRowTest1 = test1.find(
            (test1) => test1.id === id
        );
        if (selectedRowTest1) {
            setSelectedTest1(selectedRowTest1);
            setOpenPut(true);
        }
    };

    const handleClose = () => {
        setOpenPost(false);
        setOpenPut(false);
    }

    const handleDelete = (id: number) => {
        deleteTest1(id);
    };

    const rows = test1.map((p) =>({
        id: p.id,
        name: p.name,
        address: p.address,
        rooms: p.numberOfRooms
    }))

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "name", headerName: "Name", flex: 2},
        {field: "address", headerName: "Address", flex: 3},
        {field: "rooms", headerName: "Rooms", flex: 4},
        {
            field: "update",
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
        },

        {
            field: "delete",
            headerName: "Delete",
            flex: 6,
            renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDelete(params.row.id as number)}
                >
                    Delete
                </Button>
            )
        }
    ]

    return (
        <>
            <Paper>
                <Button onClick={handleOpenPost}>
                    Create new Test1
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>

            <PostTest1Dialog
                open={openPost}
                handleClose={handleClose}
                createTest1={createTest1}
            />

            <PutTest1Dialog
                open={openPut}
                handleClose={handleClose}
                updateTest1={updateTest1}
                selectedTest1={selectedTest1}
            />
        </>
    );
}