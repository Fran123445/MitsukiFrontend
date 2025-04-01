import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { CONFIG } from "../config"

function PlatformToggle({ setPlatform, platform }) {
    return (
        <ToggleButtonGroup
            value={platform}
            onChange={(_, newValue) => setPlatform(newValue)}
            exclusive
            sx={{ 
                "& .MuiToggleButtonGroup-grouped": {
                    "&.Mui-selected": {
                        backgroundColor: "primary.main",
                        color: "secondary.main",
                        "&:hover": {
                            backgroundColor: "primary.dark",
                        }
                    },
                    "&:not(.Mui-selected)": {
                        color: "primary.main",
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                        }
                    }
                }
            }}
        >
            {CONFIG.PLATFORMS.map((platform) => (
                <ToggleButton key={platform} value={platform}>
                    {platform}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}

export default PlatformToggle;