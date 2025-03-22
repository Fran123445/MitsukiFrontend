
import { MediaContextProvider } from '../context/MediaContext';
import Filters from '../components/Filters';
import Suggestions from '../components/Suggestions';
import { Box, Typography, alpha, Paper } from '@mui/material';
import LogIn from '../components/LogIn';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useTheme } from '@mui/material/styles';
import GradientText from '../components/styledComponentes/GradientText';

function UserRecommendationPage({ inputType, suggestionType }) {

  const { username } = useContext(UserContext);
  const theme = useTheme();

  return (
    <MediaContextProvider inputType={inputType} suggestionType={suggestionType} suggestionMode="user">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "80px",
          gap: theme.spacing(2)
        }}
      >
        <LogIn open={username === ""}/>

        <AutoAwesomeIcon sx={{ width: 240, height: 240, color: theme.palette.secondary.main }} />
        <Box sx={{ textAlign: 'center'}}>
          <GradientText  
            variant='h2'
            fontWeight="bold"
            align="center"
            colors={[theme.palette.secondary.main, theme.palette.accentOrange, theme.palette.secondary.main]}
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
            }}
          >
            Get personalized recommendations
          </GradientText>
          
          <Typography 
            variant="h5" 
            align="center"
            sx={{
              color: alpha(theme.palette.secondary.main, 0.9),
              fontWeight: 500,
              mb: 2,
              maxWidth: '800px',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                background: `linear-gradient(to right, transparent, ${theme.palette.accentOrange}, transparent)`,
              }
            }}
          >
            Based on your {inputType.toLowerCase()} list
          </Typography>
        </Box>

        <Filters/>
        <Suggestions/>
      </Box>
    </MediaContextProvider>
  );
}

export default UserRecommendationPage;
