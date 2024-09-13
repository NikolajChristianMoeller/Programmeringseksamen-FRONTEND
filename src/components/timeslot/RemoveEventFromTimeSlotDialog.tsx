import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, Select,} from "@mui/material";
import { useState } from "react";

type TRemoveEventFromTimeSlotDialogProps = {
    open: boolean,
    handleClose: () => void
    timeSlotId: number
    removableEvents: number[]
    deleteEventFromTimeSlot: (timeSlotId: number, eventId: number) => void
}

export default function RemoveEventFromTimeSlotDialog({
                                                          open,
                                                          handleClose,
                                                          deleteEventFromTimeSlot,
                                                          timeSlotId,
                                                          removableEvents}: TRemoveEventFromTimeSlotDialogProps) {
    const [event, setEvent] = useState<number>(removableEvents?.[0]);
    const handleRemove = () => {
        deleteEventFromTimeSlot(timeSlotId, event);
        handleClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Remove an event</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <Select
                                value={event ?? null}
                                label="Event"
                                name="Remove Event"
                                variant="outlined"
                                fullWidth
                                onChange={(e) =>
                                   setEvent(e.target.value as number)}
                            >
                            {removableEvents.map((d) => (
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
                    <Button onClick={handleRemove}>Remove</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
