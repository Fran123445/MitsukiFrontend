import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

function AboutSegment({ title, content }) {

  const theme = useTheme();

  return(
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" component="h2" sx={{ color: theme.palette.secondary.main }}>
        {title}
      </Typography>
      <Typography variant="body2" component="div" sx={{ color: theme.palette.secondary.main }}>
        {content}
      </Typography>
    </Box>
  )
}

export default AboutSegment;