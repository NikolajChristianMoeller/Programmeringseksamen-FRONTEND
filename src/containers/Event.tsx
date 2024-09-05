import { Button, Paper } from "@mui/material";
import { TEventCreateAndUpdate } from "../types/event.type.ts";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import PostEventDialog from "../components/event/PostEventDialog.tsx";
import PutEventDialog from "../components/event/PutEventDialog.tsx";
import useEvent from "../hooks/useEvent.tsx";
import useDiscipline from "../hooks/useDiscipline.tsx";

export default function Event() {
    const {event, createEvent, updateEvent, deleteEvent} = useEvent();
    const {discipline} = useDiscipline();
    const [openPost, setOpenPost] = useState(false);
    const [openPut, setOpenPut] = useState(false);

    const defaultEvent: TEventCreateAndUpdate = {
        id: 0,
        eventName: "Pole Vault",
        minimumDuration: "1 hour",
        participantGender: "FEMALE",
        participantAgeGroup: "SENIOR",
        maximumParticipants: "15",
        disciplineId: 1,
        trackId: 1,
        timeSlotId: 1,
        participantId: 1
    };

    const [selectedEvent, setSelectedEvent] = useState<TEventCreateAndUpdate>(defaultEvent)

    const handleOpenPost = () => {
        setOpenPost(true)
    }

   /* const handleOpenPut = (id: number) => {
        const selectedRowEvent = event.find(
            (event) => event.id === id
        );
        if (selectedRowEvent) {
            setSelectedEvent(selectedRowEvent);
            setOpenPut(true);
        }
    };
*/

    const findDisciplineByName = (disciplineName: string) => {
        const selectedDiscipline = discipline.find(d => d.disciplineName === disciplineName);
        return selectedDiscipline ? selectedDiscipline.id : 0;
    };

    const handleOpenPut = (id: number) => {
        const selectedRowEvent = event.find(
            (event) => event.id === id
        );
        if (selectedRowEvent) {
            const updatedSelectedEvent: TEventCreateAndUpdate = {
                id: selectedRowEvent.id,
                eventName: selectedRowEvent.eventName,
                minimumDuration: selectedRowEvent.minimumDuration,
                participantGender: selectedRowEvent.participantGender,
                participantAgeGroup: selectedRowEvent.participantAgeGroup,
                maximumParticipants: selectedRowEvent.maximumParticipants,
                disciplineId: findDisciplineByName(selectedRowEvent.disciplineId),
                trackId: selectedRowEvent.trackId ?? 0,
                timeSlotId: selectedRowEvent.timeSlotId ?? 0,
                participantId: selectedRowEvent.participantId ?? 0,
            };
            setSelectedEvent(updatedSelectedEvent);
            setOpenPut(true);
        }
    };

    const handleClose = () => {
        setOpenPost(false);
        setOpenPut(false);
    }

    const handleDelete = (id: number) => {
        void deleteEvent(id);
    };

    const rows = event.map((p) =>({
        id: p.id,
        eventName: p.eventName,
        minimumDuration: p.minimumDuration,
        participantGender: p.participantGender ?? "N/A",
        participantAgeGroup: p.participantAgeGroup ?? "N/A",
        maximumParticipants: p.maximumParticipants,
        disciplineId: p.disciplineId,
        trackId: p.trackId,
        timeSlotId: p.timeSlotId,
        participantId: p.participantId
    }))

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "eventName", headerName: "Event Name", flex: 5},
        {field: "minimumDuration", headerName: "Min. Duration", flex: 4},
        {field: "participantGender", headerName: "Gender", flex: 4},
        {field: "participantAgeGroup", headerName: "Age Group", flex: 4},
        {field: "maximumParticipants", headerName: "Max. Participants", flex: 4.5},
        {field: "disciplineId", headerName: "Discipline ID", flex: 4},
        {field: "timeSlotId", headerName: "Time Slot ID", flex: 3},
        {field: "trackId", headerName: "Track ID", flex: 3},
        {field: "participantId", headerName: "Participant ID", flex: 4},
        {
            field: "update",
            headerName: "Update",
            flex: 4.2,
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
            flex: 4.2,
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
                <h2>All Events</h2>
                <Button onClick={handleOpenPost}>
                    Create new Event
                </Button>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>
            <PostEventDialog
                open={openPost}
                handleClose={handleClose}
                createEvent={createEvent}
                disciplines={discipline}
                events={event}
            />
            <PutEventDialog
                open={openPut}
                handleClose={handleClose}
                updateEvent={updateEvent}
                disciplines={discipline}
                selectedEvent={selectedEvent}
                events={event}
            />
        </>
    );
}
