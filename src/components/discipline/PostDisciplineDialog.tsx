import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import {TDisciplineCreateAndUpdate} from "../../types/discipline.type.ts";
import {useState} from "react";

type TPostDisciplineDialogProps = {
    open: boolean,
    handleClose: () => void
    createDiscipline: (discipline: TDisciplineCreateAndUpdate ) => void
}

export default function PostDisciplineDialog({open, handleClose, createDiscipline}: TPostDisciplineDialogProps) {

    const [disciplineName, setDisciplineName] = useState<string>("");
    const [approxDuration, setApproxDuration] = useState<string>("");

    const handleCreate = () => {

        const newDiscipline: TDisciplineCreateAndUpdate = {
            id: 0,
            disciplineName: disciplineName,
            approxDuration: approxDuration,
        }
        createDiscipline(newDiscipline);
        handleClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Create new Discipline</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="User Name"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setDisciplineName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Full Name"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setApproxDuration(e.target.value)}
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