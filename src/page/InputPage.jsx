import '../App.css'
import SearchBar from '../components/SearchBar';
import Suggestions from "../components/Suggestions"
import Filters from '../components/Filters';
import { MediaContextProvider } from '../context/MediaContext';
import { Typography } from '@mui/material';

function InputPage({ inputType, suggestionType }) {
  return (
    <MediaContextProvider inputType={inputType} suggestionType={suggestionType}>
      <div className="app-container">
        <Typography 
          variant='h2'
          component={'h2'}
          color='secondary'
          sx={{
            marginBottom: "20px"
          }}
        >
            Get {suggestionType} recommendations based on {inputType}
        </Typography>
        
        <SearchBar/>
        <Filters/>
        <Suggestions/>
      </div>
    </MediaContextProvider>
  );
}

export default InputPage;

