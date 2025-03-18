import { Box, Button, Typography, Stack, useTheme, Paper } from "@mui/material";
import RecommendIcon from '@mui/icons-material/Recommend';
import PersonIcon from '@mui/icons-material/Person';
import TvIcon from '@mui/icons-material/Tv';
import BookIcon from '@mui/icons-material/Book';
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
 
    const buttonStyle = {
        padding: "12px 24px",
        borderRadius: 8,
        fontSize: "1rem",
        fontWeight: 500,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            transform: "scale(1.05)"
        }
    };
    
    return(
        <Box
            sx={{
                minHeight: "100vh",
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                py: { xs: 6, sm: 8 },
            }}
            gap={{ xs: 4, sm: 8 }}
        >
            <Box textAlign="center">
                <GradientText
                    variant="h2"
                    fontWeight="bold"
                    colors={[theme.palette.secondary.main, theme.palette.accentOrange, theme.palette.secondary.main]}
                    sx={{ mb: { xs: 2, sm: 3 } }}
                >
                    Discover Your Next Obsession
                </GradientText>
                
                <GradientText
                    variant="h6"
                    colors={[theme.palette.secondary.main, theme.palette.accentOrange, theme.palette.secondary.main]}
                    sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.6, px: 2 }}
                >
                    We analyze thousands of titles to perfectly match your unique taste.
                    <br />
                    Get recommendations that feel they were made just for you.
                </GradientText> 
            </Box>          

            <Box
                sx={{
                    display: "flex",
                    justifySelf: "center",
                }}
                gap={{ xs: 4, md: 8 }}
            >
                <Paper
                    sx={paperStyling}
                    elevation={3}
                >
                    
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                        <RecommendIcon color="primary" />
                        <Typography 
                            color="primary" 
                            align="center" 
                            variant="h6" 
                            sx={{ fontWeight: 600, mb: 2 }}
                        >
                            Based on Existing Titles
                        </Typography>
                    </Stack>

                    <Stack spacing={5} justifyContent="center">
                        <Button 
                            variant="contained" 
                            color="primary"
                            startIcon={<TvIcon />}
                        >
                            Anime
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary"
                            startIcon={<BookIcon />}
                        >
                            Manga
                        </Button>
                    </Stack>
                </Paper>

                <Paper
                    sx={paperStyling}
                    elevation={3}
                >
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                        <PersonIcon color="primary" />
                        <Typography 
                            color="primary" 
                            align="center" 
                            variant="h6" 
                            sx={{ fontWeight: 600, mb: 2 }}
                        >
                            Based on Your Profile
                        </Typography>
                    </Stack>
                    <Stack spacing={5} justifyContent="center">
                    <Stack spacing={5} justifyContent="center">
                        <Button 
                            variant="contained" 
                            color="primary"
                            startIcon={<TvIcon />}
                        >
                            Anime
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary"
                            startIcon={<BookIcon />}
                        >
                            Manga
                        </Button>
                    </Stack>
                    </Stack>
                </Paper>
            </Box>
        </Box>
    )
}

export default Home;