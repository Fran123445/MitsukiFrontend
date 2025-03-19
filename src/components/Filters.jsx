import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography, Button, FormGroup, FormControlLabel, Checkbox, Box } from "@mui/material";
import { useContext } from "react";
import { MediaContext } from "../context/MediaContext";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useTheme } from "@emotion/react";
import OptionSelector from "./OptionSelector";

function Filters() {

    const { yearRange, setYearRange, scoreRange, setScoreRange, updateSuggestions,
        excludedGenres, setExcludedGenres, includedGenres, setIncludedGenres,
        formats, selectedFormats, handleFormatChange, genres
     } = useContext(MediaContext)

     const theme = useTheme();

    return(
        <Accordion
            sx={{
                width: "100%",
                maxWidth: "1000px",
                marginBottom: 4,
                borderRadius: theme.shape.borderRadius
            }}
            disableGutters={true}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <FilterAltIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography component="span">Filters</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column'}}>
                <Typography component="span">Year range</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Slider
                        getAriaLabel={() => 'Year range'}
                        onChange={(_,v) => setYearRange(v)}
                        value={yearRange}
                        min={1900}
                        max={2025}
                        valueLabelDisplay="auto"
                        sx={{
                            width: '98%'
                        }}
                    />
                </Box>

                <Typography component="span" sx={{ marginTop: 2 }}>Score range</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Slider
                        getAriaLabel={() => 'Score range'}
                        onChange={(_,v) => setScoreRange(v)}
                        value={scoreRange}
                        valueLabelDisplay="auto"
                        sx={{
                            width: '98%'
                        }}
                    />
                </Box>
                
                <OptionSelector
                    label="Excluded genres"
                    selectedOptions={excludedGenres}
                    setOptions={setExcludedGenres}
                    options={genres}
                />

                <OptionSelector
                    label="Included genres"
                    selectedOptions={includedGenres}
                    setOptions={setIncludedGenres}
                    options={genres}
                />


                <Typography component="span" sx={{ marginTop: 2 }}>Formats</Typography>
                <FormGroup row>
                    {formats.map((format) => (
                        <FormControlLabel
                            key={format}
                            control={<Checkbox checked={selectedFormats.includes(format)} onChange={handleFormatChange} value={format} />}
                            label={format}
                        />
                    ))}
                </FormGroup>

                <Button variant="contained"
                    onClick={updateSuggestions}
                    // i'll have to update this because otherwhise the user could just infinitely
                    // press this, refreshing nothing BUT still making calls to the backend
                    sx={{
                        alignSelf: "flex-end",
                        maxWidth: "150px",
                        marginTop: 2,
                        color: theme.palette.secondary.main
                    }}
                >
                    Refresh
                </Button>
            </AccordionDetails>
        </Accordion>
    )
}

export default Filters;