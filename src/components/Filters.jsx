import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography, Button, Select, OutlinedInput, MenuItem, InputLabel } from "@mui/material";
import { useContext } from "react";
import { MediaContext } from "../context/MediaContext";
import genres from "../../public/genres.json"

function Filters() {

    const { yearRange, setYearRange, scoreRange, setScoreRange, updateSuggestions,
        excludedGenres, setExcludedGenres
     } = useContext(MediaContext)


    return(
        <Accordion
            sx={{
                width: "100%",
                maxWidth: "1000px",
                marginBottom: 4,
            }}
            disableGutters={true}
        >
            <AccordionSummary>
                <Typography component="span">Filters</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column'}}>
                <Typography component="span">Year range</Typography>
                <Slider
                    getAriaLabel={() => 'Year range'}
                    onChange={(_,v) => setYearRange(v)}
                    value={yearRange}
                    min={1900}
                    max={2025}
                    valueLabelDisplay="auto"
                />
                <Typography component="span">Score range</Typography>
                <Slider
                    getAriaLabel={() => 'Score range'}
                    onChange={(_,v) => setScoreRange(v)}
                    value={scoreRange}
                    valueLabelDisplay="auto"
                />
                
                <InputLabel>Excluded genres</InputLabel>
                <Select
                    multiple
                    value={excludedGenres}
                    onChange={e => setExcludedGenres(e.target.value)}
                >
                    {genres.map((genre) => (
                        <MenuItem
                        key={genre}
                        value={genre}
                        >
                        {genre}
                        </MenuItem>
                    ))}
                </Select>
                <Button variant="contained"
                    onClick={updateSuggestions}
                    // i'll have to update this because otherwhise the user could just infinitely
                    // press this, refreshing nothing BUT still making calls to the backend
                    sx={{
                        alignSelf: "flex-end",
                        maxWidth: "150px",
                        marginTop: "20px"
                    }}
                >
                    Refresh
                </Button>
            </AccordionDetails>
        </Accordion>
    )
}

export default Filters;