import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function ProfilePic({ userAvatarUrl }) {

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        border: `2px solid ${theme.palette.primary.main}`
      }}
    >
      <img 
        src={userAvatarUrl} 
        alt="User Avatar" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          objectPosition: 'top' 
        }} 
      />
    </Box>
  );
}

export default ProfilePic;