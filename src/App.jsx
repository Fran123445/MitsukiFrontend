import { useState } from 'react';
import './App.css'
import anime_dict from "../public/anime_dict.json"
import { Autocomplete, TextField } from '@mui/material';

function App() {

  const [suggestions, setSuggestions] = useState();

  function handleSelection(_, selectedAnime) {
    if (!selectedAnime) { return }

    var animeId = anime_dict[selectedAnime]

    fetch(`http://localhost:8000/similarity/anime?anime_id=${animeId}`)
    .then(response => response.json())
    .then(data => setSuggestions(data))
  }

  return (
    <div className="app-container">

      <h1>Input an anime</h1>

      {/* Search bar*/}
      <Autocomplete
        options={Array.from(Object.keys(anime_dict))}
        renderInput={(params) => (
          <TextField
            {...params}
          />
        )}
        sx={{ 
          width: "50%"
        }}
        onChange={handleSelection}
      />


    </div>
  );
}

export default App;
