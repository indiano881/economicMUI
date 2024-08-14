import { Box, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box 
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3A6C9C",
                width: "100%",
                margin: 0,
                padding: "16px"
            }}
        >
            <Typography variant="h1" color="white">Economic MUI</Typography>
        </Box>
    );
};

export default Header;
