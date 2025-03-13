import '../App.css'
import SearchBar from '../components/SearchBar';
import Suggestions from "../components/Suggestions"
import Filters from '../components/Filters';
import { MediaContextProvider } from '../context/MediaContext';

function InputPage({ inputType, recommendationType }) {
  return (
    <MediaContextProvider inputType={inputType} recommendationType={recommendationType}>
      <div className="app-container">
        <h1>Get {recommendationType} recommendations based on {inputType}</h1>
        <SearchBar/>
        <Filters/>
        <Suggestions/>
      </div>
    </MediaContextProvider>
  );
}

export default InputPage;

