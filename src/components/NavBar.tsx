import { AppBar, Toolbar, Typography, IconButton, Box, Tooltip, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import HailIcon from '@mui/icons-material/Hail';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ApartmentIcon from '@mui/icons-material/Apartment';

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
                        Q
                    </Box>
                    uick
                    <Box
                        component="span"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        B
                    </Box>
                    ook
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
                    <Tooltip title="Discipline">
                        <IconButton
                            component={Link}
                            to="/test1"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <ApartmentIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Test2">
                        <IconButton
                            component={Link}
                            to="/test2"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <HotelIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Test3">
                        <IconButton
                            component={Link}
                            to="/test3"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <HailIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Test4">
                        <IconButton
                            component={Link}
                            to="/test4"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <LibraryBooksIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Test5">
                        <IconButton
                            component={Link}
                            to="/test5"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <LibraryBooksIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Test6">
                        <IconButton
                            component={Link}
                            to="/test6"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <LibraryBooksIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
