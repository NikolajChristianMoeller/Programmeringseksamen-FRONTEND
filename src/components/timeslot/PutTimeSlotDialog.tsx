import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { TTimeSlotCreateAndUpdate } from "../../types/timeslot.type.ts";
import { TEventCreateAndUpdate} from "../../types/event.type.ts";

type PutTimeSlotDialogProps = {
    open: boolean;
    handleClose: () => void;
    selectedTimeSlot: TTimeSlotCreateAndUpdate;
    updateTimeSlot: (updatedTimeSlot: TTimeSlotCreateAndUpdate, id: number) => void;
    events: TEventCreateAndUpdate[];

};

export default function PutTimeSlotDialog({
                                           open,
                                           handleClose,
                                           updateTimeSlot,
                                           selectedTimeSlot, events}: PutTimeSlotDialogProps) {
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [selectedEvent, setSelectedEvent] = useState<number[]>([]);

    useEffect(() => {
        if (selectedTimeSlot) {
            setDate(selectedTimeSlot.date);
            setStartTime(selectedTimeSlot.startTime);
            setEndTime(selectedTimeSlot.endTime);
            setSelectedEvent(selectedTimeSlot.events.map((event) => event.id as number));

        }
    }, [selectedTimeSlot]);

    const handleUpdate = () => {
        const newTimeSlot: TTimeSlotCreateAndUpdate = {
            date,
            startTime,
            endTime,
            events: selectedEvent.map((id) => events.find((event) => event.id === id) as TEventCreateAndUpdate),
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
                                onChange={(e) =>
                                    setDate(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Start Time"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setStartTime(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="End Time"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setEndTime(e.target.value)}
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
