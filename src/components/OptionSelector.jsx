import { Select, MenuItem, Chip, Box, Typography, useTheme } from "@mui/material";

const OptionSelector = ({ label, selectedOptions, setOptions, options }) => {
  const theme = useTheme();

  return (
    <>
      <Typography sx={{ marginTop: 2 }}>{label}</Typography>
      <Select
        multiple
        value={selectedOptions}
        onChange={(e) => setOptions(e.target.value)}
        renderValue={(selected) => (
          <Box>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                size="small"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  borderRadius: theme.shape.borderRadius,
                  marginX: theme.spacing(0.5),
                }}
              />
            ))}
          </Box>
        )}
        MenuProps={{
          sx: {
            maxHeight: "400px",
          }
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default OptionSelector;
