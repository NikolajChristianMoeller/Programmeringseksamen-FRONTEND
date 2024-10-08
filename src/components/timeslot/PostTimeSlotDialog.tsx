import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useState } from "react";
import {TTimeSlotCreateAndUpdate} from "../../types/timeslot.type.ts";

type TPostTimeSlotDialogProps = {
    open: boolean,
    handleClose: () => void
    createTimeSlot: (timeSlot: TTimeSlotCreateAndUpdate ) => void
}

export default function PostTimeSlotDialog({
                                               open,
                                               handleClose,
                                               createTimeSlot}: TPostTimeSlotDialogProps) {
    const [date, setDate] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    //const [events, setEvents] = useState<number[]>([]);

    const handleCreate = () => {

        const newTimeSlot: TTimeSlotCreateAndUpdate = {
            date,
            startTime,
            endTime,
            events: []
        }
        createTimeSlot(newTimeSlot);
        setDate("");
        setStartTime("");
        setEndTime("");
        //setEvents([]);

        handleClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Create new Time Slot</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <TextField
                                label="Date"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setDate(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                label="Start Time"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setStartTime(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                label="End Time"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setEndTime(e.target.value)}
                            />
                        </Grid>

                        {/*
                        <Grid item xs={6}>
                            <TextField
                                label="Events"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setEvents(e.target.value)}
                            />
                        </Grid>
                        }*/}

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
