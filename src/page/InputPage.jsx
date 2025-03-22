import '../App.css'
import SearchBar from '../components/SearchBar';
import Suggestions from "../components/Suggestions"
import Filters from '../components/Filters';
import { MediaContextProvider } from '../context/MediaContext';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import PageTitle from '../components/PageTitle';

function InputPage({ inputType, suggestionType }) {

  const theme = useTheme();

  return (
    <MediaContextProvider inputType={inputType} suggestionType={suggestionType}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "80px",
          gap: theme.spacing(2),
        }}
      >
        <PageTitle subtitle={`Based on your favorite ${inputType.toLowerCase()}`}/>
        
        <SearchBar/>
        <Filters/>
        <Suggestions/>
      </Box>
    </MediaContextProvider>
  );
}

export default InputPage;

