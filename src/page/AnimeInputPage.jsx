import '../App.css'
import SearchBar from '../components/SearchBar';
import Suggestions from "../components/Suggestions"
import Filters from '../components/Filters';
import { MediaContextProvider } from '../context/MediaContext';

function AnimeInputPage() {
  return (
    <MediaContextProvider>
      <div className="app-container">
        <h1>Input an anime</h1>
        <SearchBar/>
        <Filters/>
        <Suggestions/>
      </div>
    </MediaContextProvider>
  );
}

export default AnimeInputPage;

