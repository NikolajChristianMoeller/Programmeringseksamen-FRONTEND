import { Button, Paper } from "@mui/material";
import { TTimeSlot } from "../types/timeslot.type.ts";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import PostTimeSlotDialog from "../components/timeslot/PostTimeSlotDialog.tsx";
import PutTimeSlotDialog from "../components/timeslot/PutTimeSlotDialog.tsx";
import useTimeSlot from "../hooks/useTimeSlot.tsx";
import useEvent from "../hooks/useEvent.tsx";
import RemoveEventFromTimeSlotDialog from "../components/timeslot/RemoveEventFromTimeSlotDialog.tsx";
import PostEventToTimeSlotDialog from "../components/timeslot/PostEventToTimeSlotDialog.tsx";

export default function TimeSlot() {
    const {timeSlot, createTimeSlot, updateTimeSlot, deleteTimeSlot, deleteEventFromTimeSlot, postEventToTimeSlot} = useTimeSlot();
    const {availableEvents} = useEvent
    const [openPost, setOpenPost] = useState(false);
    const [openPut, setOpenPut] = useState(false);
    const [openRemoveEvent, setOpenRemoveEvent] = useState(false);
    const [openPostEvent, setOpenPostEvent] = useState(false);

    const defaultTimeSlot: TTimeSlot = {
        id: 0,
        date: "2024-01-01",
        startTime: "2024-08-08T09:00:00",
        endTime: "2024-08-08T011:00:00",
        events: []
    }

    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TTimeSlot>(defaultTimeSlot)

    const handleOpenPost = () => {
        setOpenPost(true)
    }

    const handleOpenPut = (id: number) => {
        const selectedRowTimeSlot = timeSlot.find(
            (timeSlot) => timeSlot.id === id
        );
        if (selectedRowTimeSlot) {
            setSelectedTimeSlot(selectedRowTimeSlot);
            setOpenPut(true);
        }
    };

    const handleClose = () => {
        setOpenPost(false);
        setOpenPut(false);
        setOpenRemoveEvent(false);
        setOpenPostEvent(false);
    }

    const handleDelete = (id: number) => {
        deleteTimeSlot(id);
    };

    const handleDeleteEventFromTimeSlot = (id: number) => {
        const selectedRowTimeSlot = timeSlot.find(
            (timeSlot) => timeSlot.id === id
        );
        if (selectedRowTimeSlot) {
            setSelectedTimeSlot(selectedRowTimeSlot);
            setOpenRemoveEvent(true);
        }
    }

    const handlePostEventToTimeSlot = (id: number) => {
        const selectedRowTimeSlot = timeSlot.find(
            (timeSlot) => timeSlot.id === id
        );
        if (selectedRowTimeSlot) {
            setSelectedTimeSlot(selectedRowTimeSlot);
            setOpenPostEvent(true);
        }
    }

    const rows = timeSlot.map((p) =>({
        id: p.id,
        date: p.date,
        events: p.events.map((event) => event.eventName).join(", "),
        startTime: p.startTime,
        endTime: p.endTime
    }))

    const columns = [
        {field: "id", headerName: "ID", flex: 0.5},
        {field: "date", headerName: "Date", flex: 1.6},
        {field: "events", headerName: "Events", flex: 2},
        {field: "startTime", headerName: "Start Time", flex: 1.5},
        {field: "endTime", headerName: "End Time", flex: 1.8},
        {
            field: "update",
            headerName: "Update",
            flex: 1.4,
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
            flex: 1.4,
            renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDelete(params.row.id as number)}
                >
                    Delete
                </Button>
            )
        },
        {
            field: "removeEvent",
            headerName: "Remove an Event",
            flex: 2,
            renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="warning"
                    onClick={() => handleDeleteEventFromTimeSlot(params.row.id as number)}
                >
                    Remove an Event
                </Button>
            )
        },
        {
            field: "postEvent",
            headerName: "Add an Event",
            flex: 1.7,
            renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => handlePostEventToTimeSlot(params.row.id as number)}
                >
                    Add an Event
                </Button>
            )
        }
    ]

    return (
        <>
            <Paper>
                <h2>All Time Slots</h2>
                <Button onClick={handleOpenPost}>
                    Create new TimeSlot
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>

            <PostTimeSlotDialog
                open={openPost}
                handleClose={handleClose}
                createTimeSlot={createTimeSlot}
            />

            <PutTimeSlotDialog
                open={openPut}
                handleClose={handleClose}
                updateTimeSlot={updateTimeSlot}
                selectedTimeSlot={selectedTimeSlot}
                events={availableEvents}
            />

            <RemoveEventFromTimeSlotDialog
                open={openRemoveEvent}
                handleClose={handleClose}
                deleteEventFromTimeSlot={deleteEventFromTimeSlot}
                removableEvents={selectedTimeSlot.events}
                timeSlotId={selectedTimeSlot.id as number}
            />

            <PostEventToTimeSlotDialog
                open={openPostEvent}
                handleClose={handleClose}
                postEventToTimeSlot={postEventToTimeSlot}
                postableEvents={selectedTimeSlot.events}
                timeSlotId={selectedTimeSlot.id as number}
            />
        </>
    );
}
