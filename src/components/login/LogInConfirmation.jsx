import { Box, Button, Typography, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ProfilePic from "../ProfilePic";


function LogInConfirmation({ tempUsername, userAvatarUrl, showConfirmation, setShowConfirmation, setTempUserAvatarUrl }) {

    const theme = useTheme();
    const { setUsername, setUserAvatarUrl } = useContext(UserContext);

    const handleYes = () => {
        setUsername(tempUsername);
        setUserAvatarUrl(userAvatarUrl);
        setShowConfirmation(false);
    };

    const handleNo = () => {
        setTempUserAvatarUrl("");
        setShowConfirmation(false);
    };

    return (
        <Modal open={showConfirmation}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    width: 300,
                    bgcolor: theme.palette.secondary.main,
                    padding: theme.spacing(3),
                    gap: theme.spacing(2),
                    borderRadius: theme.shape.borderRadius
                }}
            >
                <Typography>
                    Is this you?
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: theme.spacing(2)}}>
                    <ProfilePic userAvatarUrl={userAvatarUrl}/>
                    <Typography>
                        {tempUsername}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: theme.spacing(2)}}>
                    <Button 
                        variant="contained" 
                        sx={{ color: theme.palette.secondary.main }}
                        onClick={handleYes}
                    >
                        Yes
                    </Button>
                    <Button 
                        variant="contained" 
                        sx={{ color: theme.palette.secondary.main }}
                        onClick={handleNo}
                    >
                        No
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default LogInConfirmation;