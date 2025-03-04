import anime_dict from "../../public/anime_dict.json"
import { Autocomplete, TextField } from "@mui/material"

function SearchBar({ onSuggestionsResults }) {  
    function handleSelection(_, selectedAnime) {
        if (!selectedAnime) { return }
        var animeId = anime_dict[selectedAnime]
        fetch(`http://localhost:8000/similarity/anime?anime_id=${animeId}&top_n=25`)
        .then(response => response.json())
        .then(data => onSuggestionsResults(data))
    }

    return (
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
    )

}

export default SearchBar;