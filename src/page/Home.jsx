import { Box, Button, Typography, Card, CardContent, Stack, useTheme } from "@mui/material";

import "../App.css"

function Home() {

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
            <Card sx={{ padding: "30px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}>
                <CardContent>
                    <Typography variant="h3" fontWeight="bold" color="white">Find the series that suits you best</Typography>
                    
                    <Typography color="white" sx={{ marginTop: "10px" }}>Get recommendations based on specific media</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: "10px" }}>
                        <Button variant="contained">Anime</Button>
                        <Button variant="contained" color="tertiary">Manga</Button>
                    </Stack>

                    <Typography color="white" sx={{ marginTop: "20px" }}>Or based on your profile</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: "10px" }}>
                        <Button variant="contained">Anime</Button>
                        <Button variant="contained" color="tertiary">Manga</Button>
                    </Stack>
                </CardContent>
            </Card>

        </Box>
    )
}

export default Home;