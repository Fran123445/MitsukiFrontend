import { Paper, Stack, Button, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router';

const RecommendationSection = ({ title, icon: Icon, buttons }) => {
  const theme = useTheme();

  const paperStyling = {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.18)",
    }
  };

  const buttonStyle = {
    padding: theme.spacing(2),
    fontSize: theme.typography.pxToRem(16),
  };

  return (
    <Paper sx={{ ...paperStyling }} elevation={3}>
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
        <Icon color="primary" />
        <Typography color="primary" align="center" variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          {title}
        </Typography>
      </Stack>
      <Stack spacing={5} justifyContent="center">
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            startIcon={button.icon}
            component={Link}
            to={button.to}
            sx={buttonStyle}
          >
            {button.label}
          </Button>
        ))}
      </Stack>
    </Paper>
  );
};

export default RecommendationSection;