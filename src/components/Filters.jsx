import { Accordion, AccordionDetails, AccordionSummary, Slider, Typography } from "@mui/material";
import { useContext } from "react";
import { MediaContext } from "../context/MediaContext";

function Filters() {

    const { yearRange, setYearRange } = useContext(MediaContext)

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
                    onChange={(_,v) => setYearRange(v)}
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