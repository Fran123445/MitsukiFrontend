import { useState } from 'react';
import './App.css'
import anime_dict from "../public/anime_dict.json"
import { Autocomplete, useTheme, useMediaQuery, ImageList, ImageListItem, ImageListItemBar, TextField, Box, Paper } from '@mui/material';

function App() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"))
  const [suggestions, setSuggestions] = useState();
  
  const getCols = () => {
    if (isSmallScreen) return 2
    if (isMediumScreen) return 3
    return 5
  }
  
  function handleSelection(_, selectedAnime) {
    if (!selectedAnime) { return }
    var animeId = anime_dict[selectedAnime]
    fetch(`http://localhost:8000/similarity/anime?anime_id=${animeId}&top_n=25`)
    .then(response => response.json())
    .then(data => setSuggestions(data))
  }
  
  return (
    <div className="app-container">
      <h1>Input an anime</h1>
      {/* Search bar*/}
      <Autocomplete
        options={Array.from(Object.keys(anime_dict))}
        renderInput={(params) => <TextField {...params}/>}
        sx={{
          width: "100%",
          maxWidth: "600px",
          marginBottom: 4,
        }}
        onChange={handleSelection}
      />
      {/* Suggestions */}
      {suggestions && (
        <Box 
          sx={{
            backgroundColor: theme.palette.secondary.main,
            padding: 2,
            borderRadius: 2
          }}
        >
          <ImageList cols={getCols()} gap={16}>
            {suggestions.map((item, index) => (
              <Paper 
                elevation={3} 
                key={index}
                sx={{ 
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 2,
                  overflow: 'hidden',
                  padding: 2
                }}
              >
                <ImageListItem>
                  <img
                    src={item.image_url.replace("small", "medium")}
                    alt={item.title}
                    loading="lazy"
                    style={{ 
                      aspectRatio: "2/3", 
                      objectFit: "cover"
                    }}
                  />
                  <ImageListItemBar title={item.title} subtitle={`Score: ${item.score.toFixed(2)}`} />
                </ImageListItem>
              </Paper>
            ))}
          </ImageList>
        </Box>
      )}
    </div>
  );
}

export default App;