import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
//import { TTrack } from "../types/track.type.ts";
import useTrack from "../hooks/useTrack.tsx";

export default function Track() {
    const {track} = useTrack();

    /*const defaultTrack: TTrack = {
        id: 0,
        trackType: "FIELD",
        trackShape: "OVAL",
        trackSurface: "GRASS",
        trackLength: "METERS",
        lanes: 0,
        disciplines: []
    } */

    const columns = [
        {field: "id", headerName: "ID", flex: 1},
        {field: "trackType", headerName: "Type of Track", flex: 3},
        {field: "trackShape", headerName: "Shape", flex: 3},
        {field: "trackSurface", headerName: "Surface", flex: 3},
        {field: "trackLength", headerName: "Type of Length", flex: 3},
        {field: "lanes", headerName: "Number of Lanes", flex: 3},
        {field: "disciplines", headerName: "Disciplines", flex: 3}
    ];

    const rows = track.map((p) =>({
        id: p.id,
        trackType: p.trackType,
        trackShape: p.trackShape,
        trackSurface: p.trackSurface,
        trackLength: p.trackLength,
        lanes: p.lanes,
        disciplines: p.disciplines
    }))

    return (
        <>
            <Paper>
                <h2>All Tracks</h2>
                <DataGrid columns={columns} rows={rows}/>
            </Paper>

        </>
    );
}
