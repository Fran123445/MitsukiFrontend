import { useState } from 'react';
import './App.css'
import anime_dict from "../public/anime_dict.json"

function App() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleSearch = async () => {
    // Determine the anime id from the input by doing a case-insensitive lookup.
    // If no exact match is found, fall back to the first suggestion's id.
    const animeKey = Object.keys(anime_dict).find(
      title => title.toLowerCase() === input.trim().toLowerCase()
    );
    let animeId;
    if (animeKey) {
      animeId = anime_dict[animeKey];
    } else if (suggestions.length > 0) {
      animeId = suggestions[0].id;
    } else {
      console.error("No valid anime id found for search query");
      return;
    }

    setLoading(true);
    try {
      // Send the anime id to the backend
      const response = await fetch(`http://localhost:8000/similarity/anime?anime_id=${encodeURIComponent(animeId)}&top_n=9`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      // data is expected to be an array of objects: { name, imageUrl, similarityScore }
      // Sort the results in descending order (highest similarity first)
      data.sort((a, b) => b[2] - a[2]);
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Input an anime</h1>
      <div className="input-container">
        <div className="search-container">
          <input 
            type="text"
            value={input} 
            onChange={handleInputChange} 
            placeholder="Search anime..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        
        {/* Suggestions List */}
        {suggestions.length > 0 && (
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
        )}
      </div>

      {/* API Results */}
      {loading && <p>Loading...</p>}
      {results.length > 0 && (
        <div className="results-container">
          {results.map((result, index) => (
            <div key={index} className="result-item">
              <img src={result[1]} alt={result[0]} />
              <h3>{result[0]}</h3>
              <p>Match: {(result[2] * 100).toFixed(1)}%</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
