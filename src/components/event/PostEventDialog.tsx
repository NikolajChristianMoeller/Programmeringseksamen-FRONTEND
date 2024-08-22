import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { TEventCreateAndUpdate } from "../../types/event.type.ts";

type TPostEventDialogProps = {
    open: boolean,
    handleClose: () => void
    createEvent: (TEvent: TEventCreateAndUpdate ) => void

}

export default function PostEventDialog({open, handleClose, createEvent}: TPostEventDialogProps) {

    const [eventName, setEventName] = useState<string>("");
    const [minimumDuration, setMinimumDuration] = useState<string>("");
    const [maximumParticipants, setMaximumParticipants] = useState<string>("");

    const handleCreate = () => {

        const newEvent: TEventCreateAndUpdate = {
            id: 0,
            eventName: eventName,
            minimumDuration: minimumDuration,
            maximumParticipants: maximumParticipants,
        }
        createEvent(newEvent);
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
                    <Button onClick={handleCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}