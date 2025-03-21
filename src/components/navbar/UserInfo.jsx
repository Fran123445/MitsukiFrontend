import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Box, Typography } from "@mui/material";
import ProfilePic from "../ProfilePic";

function UserInfo() {

    const { username, userAvatarUrl } = useContext(UserContext);

    var avatar;
    var name;

    if (!username) {
        avatar = "";
        name = "PROFILE";
    } else {
        avatar = userAvatarUrl;
        name = username;
    }

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Typography color="secondary" sx={{ marginRight: 1 }}>
        {name}
      </Typography>
      <ProfilePic userAvatarUrl={avatar}/>
    </Box>
  );
}

export default UserInfo;