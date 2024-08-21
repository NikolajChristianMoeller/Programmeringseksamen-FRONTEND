import { useState, useEffect } from "react";
import { TTest1CreateAndUpdate } from "../../types/test1.type.ts";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";

type PutTest1DialogProps = {
    open: boolean;
    handleClose: () => void;
    selectedTest1: TTest1CreateAndUpdate;
    updateTest1: (updatedTest1: TTest1CreateAndUpdate, id: number) => void;

};

export default function PutTest1Dialog({
                                           open,
                                           handleClose,
                                           updateTest1,
                                           selectedTest1
                                       }: PutTest1DialogProps) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        if (selectedTest1) {
            setName(selectedTest1.name);
            setAddress(selectedTest1.address);
            setCity(selectedTest1.city);
            setZip(selectedTest1.zip);
            setCountry(selectedTest1.country);
        }
    }, [selectedTest1]);

    const handleUpdate = () => {
        const newTest1: TTest1CreateAndUpdate = {
            name,
            address,
            city,
            zip,
            country,
        };
        updateTest1(newTest1, selectedTest1.id as number);
        handleClose();
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                <DialogTitle>Update Test1</DialogTitle>
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
                    <Button onClick={handleUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}