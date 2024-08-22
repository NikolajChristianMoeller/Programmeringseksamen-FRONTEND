import { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import {TAgeGroup, TGender, TParticipantCreateAndUpdate} from "../../types/participant.type.ts";

type PutParticipantDialogProps = {
    open: boolean;
    handleClose: () => void;
    selectedParticipant: TParticipantCreateAndUpdate;
    updateParticipant: (updatedParticipant: TParticipantCreateAndUpdate, id: number) => void;

};

export default function PutParticipantDialog({
                                              open,
                                              handleClose,
                                              updateParticipant,
                                              selectedParticipant
                                          }: PutParticipantDialogProps) {
    const [fullName, setFullName] = useState<string>("");
    const [participantNumber, setParticipantNumber] = useState<number>(0);
    const [gender, setGender] = useState<TGender>("OTHER");
    const [ageGroup, setAgeGroup] = useState<TAgeGroup>("KIDS");



    useEffect(() => {
        if (selectedParticipant) {
            setFullName(selectedParticipant.fullName);
            setParticipantNumber(selectedParticipant.participantNumber);
            setGender(selectedParticipant.gender);
            setAgeGroup(selectedParticipant.ageGroup);

        }
    }, [selectedParticipant]);

    const handleUpdate = () => {
        const newParticipant: TParticipantCreateAndUpdate = {
            fullName,
            participantNumber,
            gender,
            ageGroup,
        };
        updateParticipant(newParticipant, selectedParticipant.id as number);
        handleClose();
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Update Participant</DialogTitle>
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
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}