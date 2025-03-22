
import { MediaContextProvider } from '../context/MediaContext';
import Filters from '../components/Filters';
import Suggestions from '../components/Suggestions';
import { Box } from '@mui/material';
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
        <GradientText  
          variant='h2'
          fontWeight="bold"
          colors={[theme.palette.secondary.main, theme.palette.accentOrange, theme.palette.secondary.main]}
          sx={{
            textAlign: "center"
          }}
        >
          Get personalized recommendations
          <br/>
          based on your {inputType.toLowerCase()} list
        </GradientText>

        <Filters/>
        <Suggestions/>
      </Box>
    </MediaContextProvider>
  );
}

export default UserRecommendationPage;
