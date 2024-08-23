import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import FallBack from "./containers/FallBack.tsx";
import NavBar from "./components/NavBar.tsx";
import Home from "./containers/Home.tsx";
import Discipline from "./containers/Discipline.tsx";
import Event from "./containers/Event.tsx";
import Participant from "./containers/Participant.tsx";
import Timeslot from "./containers/TimeSlot.tsx";
import Track from "./containers/Track.tsx";

export default function App() {
    return (
        <>
            <SnackbarProvider maxSnack={3}>
                <CssBaseline />
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/disciplines"
                        element={<Discipline />}
                    />
                    <Route
                        path="/events"
                        element={<Event />}
                    />
                    <Route
                        path="/participants"
                        element={<Participant />}
                    />
                    <Route
                        path="/timeslots"
                        element={<Timeslot />}
                    />
                    <Route
                        path="/tracks"
                        element={<Track />}
                    />
                    <Route
                        path="/*"
                        element={<FallBack />}
                    />
                </Routes>
            </SnackbarProvider>
        </>
    );
}