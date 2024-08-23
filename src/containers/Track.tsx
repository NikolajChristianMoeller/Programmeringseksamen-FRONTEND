import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { TTrack } from "../types/track.type.ts";
import useTrack from "../hooks/useTrack.tsx";
import {TParticipant} from "../types/participant.type.ts";


export default function Track() {
    const {tracks} = useTrack();

    const defaultTrack: TTrack = {
        id: 0,
        typeOfTrack: "",
        shapeType: "",
        surfaceType: "",
        trackLength: 0,
        lanes: ""
    }

    const [selectedTrack, setSelectedTrack] =
        useState<TParticipant>(defaultTrack)


    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "typeOfTrack", headerName: "Type of Track", flex: 2},
        {field: "shapeType", headerName: "Type of Shape", flex: 3},
        {field: "surfaceType", headerName: "Type of Surface", flex: 4},
        {field: "trackLength", headerName: "Length of Track", flex: 5},
        {field: "lanes", headerName: "Number of Lanes", flex: 6},
    ];

    const rows = tracks.map((p) =>({
        id: p.id,
        typeOfTrack: p.typeOfTrack,
        shapeType: p.shapeType,
        surfaceType: p.surfaceType,
        trackLength: p.trackLength,
        lanes: p.lanes
    }))

    return (
        <>
            <Paper>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>

        </>
    );
}