import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ProfilePic({ userAvatarUrl }) {
  const theme = useTheme();
  const isValidUrl = !!userAvatarUrl;

  return (
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {isValidUrl ? (
        <img
          src={userAvatarUrl}
          alt="User Avatar"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
      ) : (
        <AccountCircleIcon sx={{ width: '100%', height: '100%', color: theme.palette.primary.main, backgroundColor: theme.palette.secondary.main }} />
      )}
    </Box>
  );
}

export default ProfilePic;
