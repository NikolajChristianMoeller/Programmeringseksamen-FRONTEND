import { Button, Paper } from "@mui/material";
import { TEvent } from "../types/event.type.ts";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import PostEventDialog from "../components/event/PostEventDialog.tsx";
import PutEventDialog from "../components/event/PutEventDialog.tsx";
import useEvent from "../hooks/useEvent.tsx";

export default function Event() {
    const {event, createEvent, updateEvent, deleteEvent} = useEvent();
    const [openPost, setOpenPost] = useState(false);
    const [openPut, setOpenPut] = useState(false);

    const defaultParticipant: TEvent = {
        id: 0,
        eventName: "",
        minimumDuration: "",
        maximumParticipants: "",
    }

    const [selectedEvent, setSelectedEvent] = useState<TEvent>(defaultParticipant)

    const handleOpenPost = () => {
        setOpenPost(true)
    }

    const handleOpenPut = (id: number) => {
        const selectedRowEvent = event.find(
            (event) => event.id === id
        );
        if (selectedRowEvent) {
            setSelectedEvent(selectedRowEvent);
            setOpenPut(true);
        }
    };

    const handleClose = () => {
        setOpenPost(false);
        setOpenPut(false);
    }

    const handleDelete = (id: number) => {
        deleteEvent(id);
    };

    const rows = event.map((p) =>({
        id: p.id,
        eventName: p.eventName,
        minimumDuration: p.minimumDuration,
        maximumParticipants: p.maximumParticipants,
    }))

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "eventName", headerName: "Event Name", flex: 2},
        {field: "minimumDuration", headerName: "Minimum Duration", flex: 3},
        {field: "maximumParticipants", headerName: "Maximum Participants", flex: 4},
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
                    Create new Event
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>

            <PostEventDialog
                open={openPost}
                handleClose={handleClose}
                createEvent={createEvent}
            />

            <PutEventDialog
                open={openPut}
                handleClose={handleClose}
                updateEvent={updateEvent}
                selectedEvent={selectedEvent}
            />
        </>
    );
}