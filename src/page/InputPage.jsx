import '../App.css'
import SearchBar from '../components/SearchBar';
import Suggestions from "../components/Suggestions"
import Filters from '../components/Filters';
import { MediaContextProvider } from '../context/MediaContext';

function InputPage({ inputType, suggestionType }) {
  return (
    <MediaContextProvider inputType={inputType} suggestionType={suggestionType}>
      <div className="app-container">
        <h1>Get {suggestionType} recommendations based on {inputType}</h1>
        <SearchBar/>
        <Filters/>
        <Suggestions/>
      </div>
    </MediaContextProvider>
  );
}

export default InputPage;

