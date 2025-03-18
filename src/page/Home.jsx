import { Box, useTheme } from "@mui/material";
import RecommendIcon from '@mui/icons-material/Recommend';
import PersonIcon from '@mui/icons-material/Person';
import TvIcon from '@mui/icons-material/Tv';
import BookIcon from '@mui/icons-material/Book';
import "../App.css"
import GradientText from "../components/styledComponentes/GradientText";
import RecommendationSection from "../components/RecommendationNavigation";

function Home() {

    const theme = useTheme();
    
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
                <RecommendationSection
                title="Based on Existing Titles"
                icon={RecommendIcon}
                buttons={[
                    { label: 'Anime', icon: <TvIcon />, to: '/recommendation/anime' },
                    { label: 'Manga', icon: <BookIcon />, to: '/recommendation/manga' },
                ]}
                />
                <RecommendationSection
                    title="Based on Your Profile"
                    icon={PersonIcon}
                    buttons={[
                        { label: 'Anime', icon: <TvIcon />, to: '/recommendation/anime' }, // just for testing, will be moved to /recommendation/user/anime
                        { label: 'Manga', icon: <BookIcon />, to: '/recommendation/manga' },
                    ]}
                />
            </Box>
        </Box>
    )
}

export default Home;