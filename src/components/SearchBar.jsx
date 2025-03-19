import { useContext } from "react";
import { Autocomplete, TextField, createFilterOptions } from "@mui/material";
import { MediaContext } from "../context/MediaContext";

function SearchBar() {
  const { mediaOptions, handleSelection } = useContext(MediaContext);
  const objectKeys = Object.keys(mediaOptions);
  const filterOptions = createFilterOptions({
    ignoreCase: true,
    limit: 10
  });

  return (
    <Autocomplete
      filterOptions={filterOptions}
      options={objectKeys}
      renderInput={(params) => <TextField {...params} />}
      sx={{
        width: "100%",
        maxWidth: "600px",
        marginBottom: 4,
      }}
      onChange={(_, v) => handleSelection(v)}
    />
  );
}

export default SearchBar;