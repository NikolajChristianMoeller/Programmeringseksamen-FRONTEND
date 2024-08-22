import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useState } from "react";
import {TTimeSlotCreateAndUpdate} from "../../types/timeslot.type.ts";

type TPostTimeSlotDialogProps = {
    open: boolean,
    handleClose: () => void
    createTimeSlot: (timeSlot: TTimeSlotCreateAndUpdate ) => void
}

export default function PostTimeSlotDialog({open, handleClose, createTimeSlot}: TPostTimeSlotDialogProps) {

    const [date, setDate] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");

    const handleCreate = () => {

        const newTimeSlot: TTimeSlotCreateAndUpdate = {
            id: 0,
            date: date,
            startTime: startTime,
            endTime: endTime,
        }
        createTimeSlot(newTimeSlot);
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

                        <Grid item xs={12}>
                            <TextField
                                label="Date"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Address"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="City"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setEndTime(e.target.value)}
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