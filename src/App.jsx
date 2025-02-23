import './App.css'
import anime_dict from "../public/anime_dict.json"
import { Autocomplete, TextField } from '@mui/material';

function App() {

  return (
    <div className="app-container">
      <h1>Input an anime</h1>
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
        />
    </div>
  );
}

export default App;
