import { Button, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router";


function NavBarElement({ name, path }) {

    const theme = useTheme();
    const location = useLocation();

    function handleClick() {
        console.log(path);
        console.log(useLocation())
    }

    return (
        <Button
        disableRipple={true}
        component={Link}
        to={path}
        onClick={handleClick}
        sx={{ 
            margin: "10px", 
            padding: "10px",
            paddingX: "25px",
            cursor: "pointer",
            color: location.pathname === path ? theme.palette.primary.main : theme.palette.secondary.main,
            backgroundColor: location.pathname === path ? theme.palette.secondary.main : theme.palette.primary.main
        }}
        >
            {name}
        </Button>
    );
}

export default NavBarElement;