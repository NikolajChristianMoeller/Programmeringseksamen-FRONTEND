import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { TEventCreateAndUpdate } from "../../types/event.type.ts";
import {TDiscipline} from "../../types/discipline.type.ts";

type TPostEventDialogProps = {
    open: boolean,
    handleClose: () => void
    createEvent: (newEvent: TEventCreateAndUpdate) => void
    events: TEventCreateAndUpdate[]
    disciplines: TDiscipline[]
};

export default function PostEventDialog({
                                            open,
                                            handleClose,
                                            createEvent,
                                        }: TPostEventDialogProps) {
    const [eventName, setEventName] = useState("");
    const [minimumDuration, setMinimumDuration] = useState("");
    const [participantGender, setParticipantGender] = useState("NULL");
    const [participantAgeGroup, setParticipantAgeGroup] = useState("NULL");
    const [maximumParticipants, setMaximumParticipants] = useState("");
    const [disciplineId, setDisciplineId] = useState(0);
    const [trackId, setTrackId] = useState(0);
    const [timeSlotId, setTimeSlotId] = useState(0);
    const [participantId, setParticipantId] = useState(0);

    const handleCreate = () => {

        const newEvent: TEventCreateAndUpdate = {
            eventName,
            minimumDuration,
            maximumParticipants,
            participantGender,
            participantAgeGroup,
            disciplineId,
            trackId,
            timeSlotId,
            participantId,
        }

        createEvent(newEvent);
        setEventName("");
        setMinimumDuration("");
        setMaximumParticipants("");
        setParticipantGender("");
        setParticipantAgeGroup("");
        setDisciplineId(0);
        setTrackId(0);
        setTimeSlotId(0);
        setParticipantId(0)

        handleClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Create new Event</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <TextField
                                value={eventName}
                                label="Event Name"
                                variant="outlined"
                                name="eventName"
                                fullWidth
                                onChange={(e) =>
                                    setEventName(e.target.value as string)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                value={disciplineId}
                                type="number"
                                name="discipline ID"
                                label="Discipline ID"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setDisciplineId(Number(e.target.value))}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                value={minimumDuration}
                                name="minimumDuration"
                                label="Minimum Duration"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setMinimumDuration(e.target.value as string)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                value={maximumParticipants}
                                name="maximumParticipants"
                                label="Maximum Number of Participants"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setMaximumParticipants(e.target.value as string)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                value={participantGender}
                                name="participantGender"
                                label="Gender"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setParticipantGender(e.target.value as string)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                value={participantAgeGroup}
                                name="Participant Age Group"
                                label="Age Group"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setParticipantAgeGroup(e.target.value as string)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                value={trackId}
                                type="number"
                                name="Track"
                                label="Track ID"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setTrackId(Number(e.target.value))}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                value={timeSlotId}
                                type="number"
                                name="Time Slot ID"
                                label="Time Slot ID"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setTimeSlotId(Number(e.target.value))}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                value={participantId}
                                type="number"
                                name="Participant ID"
                                label="Participant ID"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setParticipantId(Number(e.target.value))}
                            />
                        </Grid>

                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
