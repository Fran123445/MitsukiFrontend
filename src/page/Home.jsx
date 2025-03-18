import { Box, Button, Typography, Stack, useTheme, Paper } from "@mui/material";

import "../App.css"
import GradientText from "../components/styledComponentes/GradientText";

function Home() {

    const theme = useTheme();

    const paperStyling = {
        backgroundColor: theme.palette.secondary.main,
        padding: {xs: 2, sm: 4},
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 3 },
        borderRadius: 4,
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.18)",
        }
    }

    return(
        <Box
            sx={{
                height: "100%",
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
            }}
            gap={15}
        >
            <GradientText
                variant="h2"
                fontWeight="bold"
                colors={[theme.palette.secondary.main, theme.palette.accentOrange, theme.palette.secondary.main]}
            >
                Discover Your Next Obsession
            </GradientText>
            
            <GradientText
                variant="h6"
                colors={[theme.palette.secondary.main, theme.palette.accentOrange, theme.palette.secondary.main]}
            >
                We analyze thousands of titles to perfectly match your unique taste.
                <br />
                Get recommendations that feel they were made just for you.
            </GradientText>           

            <Box
                sx={{
                    display: "flex",
                    justifySelf: "center",
                }}
                gap={20}
            >
                <Paper
                    sx={paperStyling}
                >
                    <Typography color="primary" align="center">Based on existing titles</Typography>
                    <Stack spacing={5} justifyContent="center">
                        <Button variant="outlined" color="primary">Anime</Button>
                        <Button variant="outlined" color="primary">Manga</Button>
                    </Stack>
                </Paper>

                <Paper
                    sx={paperStyling}
                >
                    <Typography color="primary" align="center">Based on Your Profile</Typography>
                    <Stack spacing={5} justifyContent="center">
                        <Button variant="outlined" color="primary">Anime</Button>
                        <Button variant="outlined" color="primary">Manga</Button>
                    </Stack>
                </Paper>
            </Box>
        </Box>
    )
}

export default Home;