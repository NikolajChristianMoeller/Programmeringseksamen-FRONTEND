import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { TTest1CreateAndUpdate } from "../../types/test1.type.ts";
import { useState } from "react";

type TPostTest1DialogProps = {
    open: boolean,
    handleClose: () => void
    createTest1: (test1: TTest1CreateAndUpdate ) => void

}

export default function PostTest1Dialog({open, handleClose, createTest1}: TPostTest1DialogProps) {

    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    const handleCreate = () => {

        const newTest1: TTest1CreateAndUpdate = {
            id: 0,
            name: name,
            address: address,
            city: city,
            zip: zip,
            country: country,
        }
        createTest1(newTest1);
        handleClose();
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Create new Test1</DialogTitle>
                <br />
                <DialogContent>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Address"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="City"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Zip"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setZip(e.target.value)}
                            />

                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Country"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setCountry(e.target.value)}
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