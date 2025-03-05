import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from "@mui/material";

function Filters({ yearRange, onYearRangeChange }) {

    return(
        <Accordion
            sx={{ width: "50%"}}
        >
            <AccordionSummary>
                <Typography component="span">Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Slider
                    getAriaLabel={() => 'Year range'}
                    onChange={onYearRangeChange}
                    value={yearRange}
                    min={1900}
                    max={2025}
                    valueLabelDisplay="auto"
                />
            </AccordionDetails>
        </Accordion>
    )
}

export default Filters;