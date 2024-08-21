import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import FallBack from "./containers/FallBack.tsx";
import NavBar from "./components/NavBar.tsx";
import Home from "./containers/Home.tsx";
import Test1 from "./containers/Test1.tsx";

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
                        path="/test1"
                        element={<Test1 />}
                    />
                    <Route
                        path="/test2"
                        element={<Test2 />}
                    />
                    <Route
                        path="/test3"
                        element={<Test3 />}
                    />
                    <Route
                        path="/test4"
                        element={<Test4 />}
                    />
                    <Route
                        path="/test5"
                        element={<Test5 />}
                    />
                    <Route
                        path="/test6"
                        element={<Test6 />}
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