import { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { TEventCreateAndUpdate } from "../../types/event.type.ts";
import {TDiscipline} from "../../types/discipline.type.ts";

type PutEventDialogProps = {
    open: boolean;
    handleClose: () => void;
    updateEvent: (updatedEvent: TEventCreateAndUpdate, id: number) => void;
    selectedEvent: TEventCreateAndUpdate;
    disciplines: TDiscipline[];
    events: TEventCreateAndUpdate[];
};

export default function PutEventDialog({
                                           open,
                                           handleClose,
                                           updateEvent,
                                           selectedEvent,
                                       }: PutEventDialogProps) {
    const [eventName, setEventName] = useState("");
    const [minimumDuration, setMinimumDuration] = useState("");
    const [participantGender, setParticipantGender] = useState("");
    const [participantAgeGroup, setParticipantAgeGroup] = useState("");
    const [maximumParticipants, setMaximumParticipants] = useState("");
    const [disciplineId, setDisciplineId] = useState(0);
    const [trackId, setTrackId] = useState(0);
    const [timeSlotId, setTimeSlotId] = useState(0);
    const [participantId, setParticipantId] = useState(0);

    useEffect(() => {
        if (selectedEvent) {
            setEventName(selectedEvent.eventName);
            setMinimumDuration(selectedEvent.minimumDuration);
            setParticipantGender(selectedEvent.participantGender);
            setParticipantAgeGroup(selectedEvent.participantAgeGroup);
            setMaximumParticipants(selectedEvent.maximumParticipants);
            setDisciplineId(selectedEvent.disciplineId);
            setTrackId(selectedEvent.trackId)
            setTimeSlotId(selectedEvent.timeSlotId)
            setParticipantId(selectedEvent.participantId)
        }
    }, [selectedEvent]);

    const handleUpdate = () => {
        const updatedEvent: TEventCreateAndUpdate = {
            eventName,
            minimumDuration,
            participantGender,
            participantAgeGroup,
            maximumParticipants,
            disciplineId,
            trackId,
            timeSlotId,
            participantId,
        };
        updateEvent(updatedEvent, selectedEvent.id as number);
        handleClose();
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Update Event</DialogTitle>
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
                                value={minimumDuration}
                                name="minimum Duration"
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
                                label="Maximum Participants"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setMaximumParticipants(e.target.value as string)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                value={disciplineId}
                                type="number"
                                label="Discipline ID"
                                name="Discipline ID"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setDisciplineId(Number(e.target.value))}
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
                                value={trackId}
                                type="number"
                                name="track ID"
                                label="Track ID"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setTrackId(Number(e.target.value))}
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
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
