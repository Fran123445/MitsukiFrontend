import './App.css'
import { useState } from 'react';
import SearchBar from './components/SearchBar';"./components/SearchBar"
import Suggestions from "./components/Suggestions"

function App() {
  const [suggestions, setSuggestions] = useState();


  return (
    <div className="app-container">
      <h1>Input an anime</h1>
      <SearchBar onSuggestionsResults={setSuggestions}/>
      <Suggestions suggestions={suggestions}/>
    </div>
  );
}

export default App;