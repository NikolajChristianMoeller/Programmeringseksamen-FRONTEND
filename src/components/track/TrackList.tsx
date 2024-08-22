import { Paper, Typography } from "@mui/material";
import useTrack from "../../hooks/useTrack";
import { TTrack } from "../../types/track.type";

const TrackList = () => {
    const { track } = useTrack();  // Use 'track' here since that's what's returned

    return (
        <Paper>
            <Typography variant="h4">Available Tracks</Typography>
            {track.length === 0 ? (
                <Typography>No tracks available.</Typography>
            ) : (
                track.map((track: TTrack) => (
                    <Paper key={track.id} style={{ margin: "1rem", padding: "1rem" }}>
                        <Typography variant="h6">{track.typeOfTrack}</Typography>
                        <Typography>Shape: {track.shapeType}</Typography>
                        <Typography>Surface: {track.surfaceType}</Typography>
                        <Typography>Length: {track.trackLength} meters</Typography>
                        <Typography>Lanes: {track.lanes}</Typography>
                    </Paper>
                ))
            )}
        </Paper>
    );
};

export default TrackList;
