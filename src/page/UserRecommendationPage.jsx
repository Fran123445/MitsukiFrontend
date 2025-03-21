
import { MediaContextProvider } from '../context/MediaContext';
import Filters from '../components/Filters';
import Suggestions from '../components/Suggestions';
import { Box } from '@mui/material';
import LogIn from '../components/LogIn';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserRecommendationPage({ inputType, suggestionType }) {

  const { username } = useContext(UserContext);

  return (
    <MediaContextProvider inputType={inputType} suggestionType={suggestionType} suggestionMode="user">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "80px",
        }}
      >
        <LogIn open={username === ""}/>
        <Filters/>
        <Suggestions/>
      </Box>
    </MediaContextProvider>
  );
}

export default UserRecommendationPage;
