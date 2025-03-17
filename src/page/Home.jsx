import { Box, Button, Typography, Card, CardContent, Stack, useTheme } from "@mui/material";

import "../App.css"

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
        >
            <Typography
                variant="h3"
                fontWeight="bold"
                color="secondary"
            >
                Discover Your Next Obsession
            </Typography>
            <Typography
                variant="h6"
                color="secondary"
                margin={"20px"}
            >
                We analyze thousands of titles to perfectly match your unique taste.
                <br />
                Get recommendations that feel they were made just for you.
            </Typography>
            

            <Box
                sx={{
                    display: "flex",
                    justifySelf: "center"
                }}
            >
                <Box>
                    <Typography color="secondary" margin={"20px"}>Based on existing titles</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: "10px" }}>
                        <Button variant="outlined" color="secondary">Anime</Button>
                        <Button variant="outlined" color="secondary">Manga</Button>
                    </Stack>
                </Box>

                <Box>
                    <Typography color="secondary" margin={"20px"}>Based on Your Profile</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: "10px" }}>
                        <Button variant="outlined" color="secondary">Anime</Button>
                        <Button variant="outlined" color="secondary">Manga</Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;