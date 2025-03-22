import { 
  useTheme, 
  useMediaQuery, 
  ImageList, 
  ImageListItem, 
  ImageListItemBar, 
  Box, 
  Paper, 
  Zoom, 
  Typography, 
  Tooltip,
  IconButton,
} from '@mui/material';
import { useContext } from 'react';
import { MediaContext } from '../context/MediaContext';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { alpha } from '@mui/material/styles';

const IMAGE_LIST_GAP = 20;
const ASPECT_RATIO = '2/3';

function Suggestions() {
  const { suggestionType, suggestions } = useContext(MediaContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getCols = () => {
    if (isSmallScreen) return theme.breakpoints.values.imageCols.small;
    if (isMediumScreen) return theme.breakpoints.values.imageCols.medium;
    return theme.breakpoints.values.imageCols.large;
  };

  const cols = getCols();

  if (!suggestions) {
    return null;
  }

  return(
    <Box sx={{ width: '100%', mt: 2 }}>
      <ImageList cols={cols} gap={IMAGE_LIST_GAP}>
        {suggestions.map((item, index) => (
          <Zoom 
            in={true} 
            style={{ 
              transitionDelay: `${index * theme.transitions.zoomDelay}ms`,
            }}
            key={`${item.id}`}
          >
            <Paper 
              elevation={4} 
              sx={{ 
                overflow: 'hidden',
                padding: theme.spacing(0.5),
                background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.9)}, ${alpha(theme.palette.accentOrange, 0.8)})`,
                borderRadius: theme.shape.borderRadius,
                transition: theme.transitions.standard,
                transform: 'translateY(0)',
                "&:hover": {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
                  "& .MuiImageListItemBar-title": {
                    color: theme.palette.accentOrange,
                  },
                  "& .suggestion-overlay": {
                    opacity: 1,
                  }
                }
              }}
            >
              <ImageListItem
                sx={{ 
                  cursor: 'pointer', 
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: theme.shape.borderRadius
                }}
                onClick={() => window.open(`https://anilist.co/${suggestionType.toLowerCase()}/${item.id}`)}
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  loading="lazy"
                  style={{ 
                    aspectRatio: ASPECT_RATIO,
                    objectFit: "cover",
                    borderRadius: theme.shape.borderRadius,
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                  }}
                />
                
                {/* Hover overlay with additional info */}
                <Box 
                  className="suggestion-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: theme.shape.borderRadius,
                    padding: 2,
                  }}
                >
                  <Typography 
                    variant="body1" 
                    fontWeight={600} 
                    sx={{ 
                      color: '#fff', 
                      textAlign: 'center' 
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 1,
                      color: '#fff',
                    }}
                  >
                    <StarIcon sx={{ color: theme.palette.accentOrange, mr: 0.5 }} />
                    <Typography variant="body1" fontWeight={600}>
                      Match score:
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      {item.score.toFixed(2)}
                    </Typography>
                  </Box>
                  
                  {item.year && (
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        color: '#fff',
                      }}
                    >
                      <CalendarMonthIcon sx={{ color: theme.palette.secondary.main, mr: 0.5 }} />
                      <Typography variant="body2">
                        {item.year}
                      </Typography>
                    </Box>
                  )}
                  
                  <Tooltip title="View on AniList">
                    <IconButton 
                      size="medium" 
                      sx={{
                        backgroundColor: alpha(theme.palette.secondary.main, 0.9),
                        color: theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: theme.palette.secondary.main,
                          transform: 'scale(1.1)',
                        },
                        transition: theme.transitions.fast,
                      }}
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
                
                <ImageListItemBar 
                  title={item.title} 
                  subtitle={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <StarIcon sx={{ fontSize: '0.9rem', color: theme.palette.accentOrange }} />
                      <Typography variant="body2" component="span" sx={{ fontWeight: 500 }}>
                        {item.score.toFixed(2)}
                      </Typography>
                    </Box>
                  }
                  sx={{
                    background: 'linear-gradient(rgba(0,0,0,0)1%, rgba(0,0,0,0.85)95%)',
                    '& .MuiImageListItemBar-title': {
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      transition: 'color 0.3s ease',
                      color: '#fff',
                      mb: 0.5,
                    },
                    '& .MuiImageListItemBar-subtitle': {
                      color: '#fff',
                    }
                  }}
                />
              </ImageListItem>
            </Paper>
          </Zoom>
        ))}
      </ImageList>
    </Box>
  );
}

export default Suggestions;