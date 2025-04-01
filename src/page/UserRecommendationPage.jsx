
import { MediaContextProvider } from '../context/MediaContext';
import Filters from '../components/Filters';
import Suggestions from '../components/Suggestions';
import { Box } from '@mui/material';
import LogIn from '../components/login/LogIn';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useTheme } from '@mui/material/styles';
import PageTitle from '../components/PageTitle';

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

        <PageTitle subtitle={`Based on your ${inputType.toLowerCase()} list`}/>
        <Filters/>
        <Suggestions/>
      </Box>
    </MediaContextProvider>
  );
}

export default UserRecommendationPage;
