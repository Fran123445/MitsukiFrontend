import { useState } from 'react';
import './App.css'
import anime_dict from "../public/anime_dict.json"

function App() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getSuggestions(title) {
    if (!title || title.trim() === "") {
      setSuggestions([]);
      return;
    }

    const searchTerm = title.toLowerCase();
    const suggestionList = [];

    for (const animeTitle in anime_dict) {
      const lowerAnimeTitle = animeTitle.toLowerCase();

      // 1. Exact Match (Prioritize this)
      if (lowerAnimeTitle === searchTerm) {
        suggestionList.push({ title: animeTitle, id: anime_dict[animeTitle], score: 0, matchType: "exact" });
      }
      // 2. Starts With Match (Second priority)
      else if (lowerAnimeTitle.startsWith(searchTerm)) {
        suggestionList.push({ title: animeTitle, id: anime_dict[animeTitle], score: 1, matchType: "startsWith" });
      }
      // 3. Includes Match (Third priority)
      else if (lowerAnimeTitle.includes(searchTerm)) {
        suggestionList.push({ title: animeTitle, id: anime_dict[animeTitle], score: 2, matchType: "includes" });
      }
    }

    suggestionList.sort((a, b) => a.score - b.score);
    setSuggestions(suggestionList.slice(0, 5));
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
    getSuggestions(e.target.value);
  };

  const handleSuggestionClick = (suggestionTitle) => {
    setInput(suggestionTitle);
    setSuggestions([]);
  };

  const handleRecommendationCall = () => {
    console.log("ola");
  };

  return (
    <div className="app-container">
      <h1>Input an anime</h1>
      <div className="search-container">
        <input 
          type="text"
          value={input} 
          onChange={handleInputChange} 
          placeholder="Search anime..."
        />
        <button onClick={handleRecommendationCall}>Search</button>
      </div>
      <div className="suggestions-container">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index} 
            className="suggestion-item"
            onClick={() => handleSuggestionClick(suggestion.title)}
          >
            {suggestion.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
