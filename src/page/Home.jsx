import { Box, Button, Typography, Card, CardContent, Stack, useTheme } from "@mui/material";

import "../App.css"
import GradientText from "../components/styledComponentes/GradientText";

function Home() {

    const theme = useTheme();

    return(
        <Box
            sx={{
                height: "100%",
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
            }}
            gap={5}
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
                    justifySelf: "center"
                }}
                gap={20}
            >
                <Box>
                    <Typography color="secondary" align="center">Based on existing titles</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button variant="outlined" color="secondary">Anime</Button>
                        <Button variant="outlined" color="secondary">Manga</Button>
                    </Stack>
                </Box>

                <Box>
                    <Typography color="secondary" align="center">Based on Your Profile</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button variant="outlined" color="secondary">Anime</Button>
                        <Button variant="outlined" color="secondary">Manga</Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;