import { Box, Typography, alpha } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GradientText from './styledComponentes/GradientText';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


function PageTitle({ subtitle }) {
  const theme = useTheme();
  return (
    <Box sx={{ textAlign: 'center'}}>
        <AutoAwesomeIcon sx={{ width: 240, height: 240, color: theme.palette.secondary.main }} />
        <GradientText  
            variant='h2'
            fontWeight="bold"
            align="center"
            colors={[theme.palette.secondary.main, theme.palette.accentOrange, theme.palette.secondary.main]}
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
            }}
          >
            Get personalized recommendations
          </GradientText>
          
          <Typography 
            variant="h5" 
            align="center"
            sx={{
              color: alpha(theme.palette.secondary.main, 0.9),
              fontWeight: 500,
              mb: 2,
              maxWidth: '800px',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                background: `linear-gradient(to right, transparent, ${theme.palette.accentOrange}, transparent)`,
              }
            }}
          >
            {subtitle}
          </Typography>
    </Box>
  );
}

export default PageTitle;