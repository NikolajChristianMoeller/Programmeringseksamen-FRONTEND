import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, Select,} from "@mui/material";
import { useState } from "react";

type TRemoveEventFromTimeSlotDialogProps = {
    open: boolean,
    handleClose: () => void
    timeSlotId: number
    postableEvents: number[]
    postEventToTimeSlot: (timeSlotId: number, eventId: number) => void
}

export default function AddEventToTimeSlotDialog({
                                                          open,
                                                          handleClose,
                                                          postEventToTimeSlot,
                                                          timeSlotId,
                                                          postableEvents}: TRemoveEventFromTimeSlotDialogProps) {
    const [event, setEvent] = useState<number>(postableEvents?.[0]);
    const handleAdd = () => {
        postEventToTimeSlot(timeSlotId, event);
        handleClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Add an event</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <Select
                                value={event ?? null}
                                label="Event"
                                name="Add Event"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                    setEvent(e.target.value as number)}
                            >
                                {postableEvents.map((d) => (
                                    <MenuItem key={d.id} value={d.id}>
                                        {d.eventName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAdd}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
