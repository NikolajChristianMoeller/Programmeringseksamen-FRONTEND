import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useState } from "react";
import {TAgeGroup, TGender, TParticipantCreateAndUpdate} from "../../types/participant.type.ts";

type TPostParticipantDialogProps = {
    open: boolean,
    handleClose: () => void
    createParticipant: (participant: TParticipantCreateAndUpdate ) => void
}

export default function PostParticipantDialog({open, handleClose, createParticipant}: TPostParticipantDialogProps) {

    const [fullName, setFullName] = useState("");
    const [participantNumber, setParticipantNumber] = useState(0);
    const [gender, setGender] = useState<TGender>("OTHER");
    const [ageGroup, setAgeGroup] = useState<TAgeGroup>("KIDS");

    const handleCreate = () => {
        const newParticipant: TParticipantCreateAndUpdate = {
            fullName,
            participantNumber,
            gender,
            ageGroup,

        }
        createParticipant(newParticipant);
        setFullName("");
        setParticipantNumber(0);
        setGender("OTHER");
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
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Participant Number"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setParticipantNumber(Number(e.target.value))}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Gender"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setGender(e.target.value as TGender)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Age Group"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setAgeGroup(e.target.value as TAgeGroup)}
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