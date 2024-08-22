import { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import {TTimeSlotCreateAndUpdate} from "../../types/timeslot.type.ts";

type PutTimeSlotDialogProps = {
    open: boolean;
    handleClose: () => void;
    selectedTimeSlot: TTimeSlotCreateAndUpdate;
    updateTimeSlot: (updatedTimeSlot: TTimeSlotCreateAndUpdate, id: number) => void;

};

export default function PutTimeSlotDialog({
                                           open,
                                           handleClose,
                                           updateTimeSlot,
                                           selectedTimeSlot
                                       }: PutTimeSlotDialogProps) {
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    useEffect(() => {
        if (selectedTimeSlot) {
            setDate(selectedTimeSlot.date);
            setStartTime(selectedTimeSlot.startTime);
            setEndTime(selectedTimeSlot.endTime);
        }
    }, [selectedTimeSlot]);

    const handleUpdate = () => {
        const newTimeSlot: TTimeSlotCreateAndUpdate = {
            date,
            startTime,
            endTime,
        };
        updateTimeSlot(newTimeSlot, selectedTimeSlot.id as number);
        handleClose();
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Update TimeSlot</DialogTitle>
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
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}