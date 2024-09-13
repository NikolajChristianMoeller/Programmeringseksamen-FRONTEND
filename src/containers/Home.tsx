import { Paper, Typography } from "@mui/material";

/**
 * Home component.
 */
export default function Home() {

    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    padding: 2,
                    margin: 2,
                    borderRadius: 2
                }}
            >
                <h1>Welcome to the Athletic Meet!</h1>
                <Typography
                    variant="h6"
                    component="div"
                >
                    Each year, we host athletic meets that unite athletes from across the region. Our events feature a range of disciplines, including running, jumping, and throwing, all aimed at fostering sportsmanship and healthy competition.
                </Typography>
                <br></br>
                <Typography
                    variant="body1"
                    component="div"
                >
                    Our meet offers a prime platform for athletes to demonstrate their abilities and compete with their peers. We offer a diverse selection of events, from track and field to swimming and gymnastics. Whether you're a seasoned competitor or new to the sport, our meet has something for everyone.
                </Typography>
                <Typography
                    variant="body1"
                    component="div"
                >
                    Additionally, we offer training and coaching for those looking to enhance their skills.

                    <br></br>
                    <br></br>
                    Our experienced coaches are committed to helping athletes achieve their highest potential.
                </Typography>

            </Paper>
        </>
    );
}
