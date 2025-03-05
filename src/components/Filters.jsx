import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from "@mui/material";

function Filters({ yearRange, onYearRangeChange }) {

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
            <AccordionDetails>
                <Typography component="span">Year range</Typography>
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