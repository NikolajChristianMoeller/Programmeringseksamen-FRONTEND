import { Button, Paper, Typography } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import useTrack from "../hooks/useTrack";
import { TTrack } from "../types/track.type";

const Track = () => {
    const { track, deleteTrack } = useTrack();

    const handleDelete = (id: number) => {
        void deleteTrack(id);
    };

    const columns = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "typeOfTrack", headerName: "Type of Track", flex: 2 },
        { field: "shapeType", headerName: "Shape Type", flex: 2 },
        { field: "surfaceType", headerName: "Surface Type", flex: 2 },
        { field: "trackLength", headerName: "Track Length", flex: 1 },
        { field: "lanes", headerName: "Lanes", flex: 1 },
        {
            field: "actions",
            headerName: "Actions",
            flex: 2,
            renderCell: (params: GridCellParams) => (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(params.row.id as number)}
                >
                    Delete
                </Button>
            ),
        },
    ];

    const rows = track.map((t: TTrack) => ({
        id: t.id,
        typeOfTrack: t.typeOfTrack,
        shapeType: t.shapeType,
        surfaceType: t.surfaceType,
        trackLength: t.trackLength,
        lanes: t.lanes,
    }));

    return (
        <Paper style={{ padding: "1rem", marginTop: "2rem" }}>
            <Typography variant="h4" gutterBottom>
                Available Tracks
            </Typography>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid columns={columns} rows={rows} />
            </div>
        </Paper>
    );
};

export default Track;
