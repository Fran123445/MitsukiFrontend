import './App.css'
import { useState } from 'react';
import SearchBar from './components/SearchBar';"./components/SearchBar"
import Suggestions from "./components/Suggestions"
import Filters from './components/Filters';

function App() {
  
  const [yearRange, setYearRange] = useState([1900, 2025]);
  const [suggestions, setSuggestions] = useState();

  function handleYearRange(_, newRange) {
    setYearRange(newRange)
  }

  return (
    <div className="app-container">
      <h1>Input an anime</h1>
      <SearchBar onSuggestionsResults={setSuggestions} yearRange={yearRange}/>
      <Filters yearRange={yearRange} onYearRangeChange={handleYearRange}/>
      <Suggestions suggestions={suggestions}/>
    </div>
  );
}

export default App;