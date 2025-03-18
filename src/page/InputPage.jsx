import '../App.css'
import SearchBar from '../components/SearchBar';
import Suggestions from "../components/Suggestions"
import Filters from '../components/Filters';
import { MediaContextProvider } from '../context/MediaContext';
import GradientText from "../components/styledComponentes/GradientText"
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

function InputPage({ text, inputType, suggestionType }) {

  const theme = useTheme();

  return (
    <MediaContextProvider inputType={inputType} suggestionType={suggestionType}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "80px"
        }}
      >
        <GradientText  
          variant='h2'
          fontWeight="bold"
          colors={[theme.palette.secondary.main, theme.palette.accentOrange, theme.palette.secondary.main]}
        >
          {text}
        </GradientText>
        
        <SearchBar/>
        <Filters/>
        <Suggestions/>
      </Box>
    </MediaContextProvider>
  );
}

export default InputPage;

