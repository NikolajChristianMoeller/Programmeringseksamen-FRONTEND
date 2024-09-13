import { AppBar, Toolbar, Typography, IconButton, Box, Tooltip, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AddRoadIcon from '@mui/icons-material/AddRoad';

/**
 * Navbar component.
 */
export default function Navbar() {
    const theme = useTheme();
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: "none",
                borderBottom: `1px solid ${theme.palette.divider}`
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        color: theme.palette.text.primary,
                        fontWeight: "bold",
                        cursor: "pointer",
                        "&:hover": {
                            color: theme.palette.primary.main
                        }
                    }}
                >
                    <Box
                        component="span"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        A
                    </Box>
                    tlætikstævne
                    <Box
                        component="span"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        P
                    </Box>
                    lanlægning

                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Tooltip title="Home">
                        <IconButton
                            component={Link}
                            to="/"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <HomeIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Disciplines">
                        <IconButton
                            component={Link}
                            to="/disciplines"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <SportsBasketballIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Events">
                        <IconButton
                            component={Link}
                            to="/events"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <EventIcon />
                        </IconButton>
                    </Tooltip>
                    {/*}
                    <Tooltip title="Participants">
                        <IconButton
                            component={Link}
                            to="/participants"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <HailIcon />
                        </IconButton>
                    </Tooltip>
                    */}
                    <Tooltip title="Time Slots">
                        <IconButton
                            component={Link}
                            to="/timeslots"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <AccessTimeIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Tracks">
                        <IconButton
                            component={Link}
                            to="/tracks"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <AddRoadIcon />
                        </IconButton>
                    </Tooltip>

                </Box>
            </Toolbar>
        </AppBar>
    );
}
