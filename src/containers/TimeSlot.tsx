import { Button, Paper } from "@mui/material";
import { TTimeSlot } from "../types/timeslot.type.ts";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import PostTimeSlotDialog from "../components/timeslot/PostTimeSlotDialog.tsx";
import PutTimeSlotDialog from "../components/timeslot/PutTimeSlotDialog.tsx";
import useTimeSlot from "../hooks/useTimeSlot.tsx";

export default function TimeSlot() {
    const {timeSlot, createTimeSlot, updateTimeSlot, deleteTimeSlot} = useTimeSlot();
    const [openPost, setOpenPost] = useState(false);
    const [openPut, setOpenPut] = useState(false);

    const defaultParticipant: TTimeSlot = {
        id: 0,
        date: "",
        startTime: "",
        endTime: "",
    }

    const [selectedTimeSlot, setSelectedTimeSlot] = useState<TTimeSlot>(defaultParticipant)

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
    }

    const handleDelete = (id: number) => {
        deleteTimeSlot(id);
    };

    const rows = timeSlot.map((p) =>({
        id: p.id,
        date: p.date,
        startTime: p.startTime,
        endTime: p.endTime
    }))

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "date", headerName: "Time Slot Date", flex: 2},
        {field: "startTime", headerName: "Start Time", flex: 3},
        {field: "endTime", headerName: "End Time", flex: 4},
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
            />
        </>
    );
}