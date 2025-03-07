import { useContext } from "react";
import anime_dict from "../../public/anime_dict.json"
import { Autocomplete, TextField } from "@mui/material"
import { MediaContext } from "../context/MediaContext";

function SearchBar() {
    const { handleSelection } = useContext(MediaContext)

    return (
        <Autocomplete
        options={Array.from(Object.keys(anime_dict))}
        renderInput={(params) => <TextField {...params}/>}
        sx={{
            width: "100%",
            maxWidth: "600px",
            marginBottom: 4,
        }}
        onChange={(_, v) => handleSelection(v)}
        />
    )

}

export default SearchBar;