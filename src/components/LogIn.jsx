import { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LogInConfirmation from "./LogInConfirmation";
import { userFetchingService } from "../service/UserFetchingService";
import { useContext } from "react";
import PlatformToggle from "./PlatformToggle";
import { UserContext } from "../context/UserContext";

function LogIn({ open }) {
    
    const [tempUsername, setTempUsername] = useState("");
    const [tempUserAvatarUrl, setTempUserAvatarUrl] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);
    const theme = useTheme();
    const { platform, setPlatform } = useContext(UserContext);

    const handleUserFetching = async (username) => {
        try {
            const user = await userFetchingService.fetchUser(username, platform);
            setTempUsername(user.username);
            setTempUserAvatarUrl(user.avatar_url);
        } catch (error) {
            console.error(`Error fetching user:`, error);
            throw error;
        }
    }

    useEffect(() => {
        if (tempUsername && tempUserAvatarUrl) {
            setShowConfirmation(true);
        }
    }, [tempUsername, tempUserAvatarUrl]);

    return (
        <Modal open={open}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    width: 400,
                    bgcolor: theme.palette.secondary.main,
                    padding: theme.spacing(3),
                    gap: theme.spacing(2),
                    borderRadius: theme.shape.borderRadius
                }}
            >

                <Typography 
                    variant="h4"
                    align="center"
                >
                    Enter your <br />
                    {platform} <br />
                    username
                </Typography>

                <PlatformToggle setPlatform={setPlatform} platform={platform} />

                <TextField
                    label={`${platform} Username`}
                    variant="outlined"
                    value={tempUsername}
                    onChange={(e) => setTempUsername(e.target.value)}
                />

                <Button
                    variant="contained"
                    onClick={() => handleUserFetching(tempUsername)}
                    sx={{
                        color: theme.palette.secondary.main
                    }}
                >
                    Done
                </Button>

                <LogInConfirmation 
                    tempUsername={tempUsername} 
                    userAvatarUrl={tempUserAvatarUrl} 
                    showConfirmation={showConfirmation} 
                    setShowConfirmation={setShowConfirmation}
                    setTempUserAvatarUrl={setTempUserAvatarUrl}
                />
            </Box>
        </Modal>
    )
}

export default LogIn;