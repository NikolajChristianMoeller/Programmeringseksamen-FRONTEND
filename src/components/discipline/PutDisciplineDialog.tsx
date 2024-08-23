import { useState, useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { TDiscipline } from "../../types/discipline.type.ts";

type PutDisciplineDialogProps = {
    open: boolean;
    handleClose: () => void;
    selectedDiscipline: TDiscipline;
    updateDiscipline: (updatedDiscipline: TDiscipline, id: number) => void;
};

export default function PutDisciplineDialog({
                                           open,
                                           handleClose,
                                           updateDiscipline,
                                           selectedDiscipline
                                       }: PutDisciplineDialogProps) {
    const [disciplineName, setDisciplineName] = useState("");
    const [approxDuration, setApproxDuration] = useState("");

    useEffect(() => {
        if (selectedDiscipline) {
            setDisciplineName(selectedDiscipline.disciplineName);
            setApproxDuration(selectedDiscipline.approxDuration);
        }
    }, [selectedDiscipline]);

    const handleUpdate = () => {
        const newDiscipline: TDiscipline = {
            disciplineName,
            approxDuration,
        };
        updateDiscipline(newDiscipline, selectedDiscipline.id as number);
        handleClose();
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Update Discipline</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="Discipline Name"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setDisciplineName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Minimum Duration"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setApproxDuration(e.target.value)}
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