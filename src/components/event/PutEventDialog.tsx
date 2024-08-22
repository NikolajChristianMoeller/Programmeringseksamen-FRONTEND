import { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { TEventCreateAndUpdate } from "../../types/event.type.ts";

type PutEventDialogProps = {
    open: boolean;
    handleClose: () => void;
    selectedEvent: TEventCreateAndUpdate;
    updateEvent: (updatedEvent: TEventCreateAndUpdate, id: number) => void;

};

export default function PutEventDialog({
                                           open,
                                           handleClose,
                                           updateEvent,
                                           selectedEvent
                                       }: PutEventDialogProps) {
    const [eventName, setEventName] = useState("");
    const [minimumDuration, setMinimumDuration] = useState("");
    const [maximumParticipants, setMaximumParticipants] = useState("");

    useEffect(() => {
        if (selectedEvent) {
            setEventName(selectedEvent.eventName);
            setMinimumDuration(selectedEvent.minimumDuration);
            setMaximumParticipants(selectedEvent.maximumParticipants);
        }
    }, [selectedEvent]);

    const handleUpdate = () => {
        const newEvent: TEventCreateAndUpdate = {
            eventName,
            minimumDuration,
            maximumParticipants,
        };
        updateEvent(newEvent, selectedEvent.id as number);
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

                        <Grid item xs={12}>
                            <TextField
                                label="Event Name"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setEventName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Minimum Duration"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setMinimumDuration(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Maximum Participants"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setMaximumParticipants(e.target.value)}
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
    )
}