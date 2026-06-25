import { AppBar, MenuItem, Toolbar, Typography, styled } from "@mui/material"


const NavBar = () => {


    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        color: "primary.contrastText"
    }))

    return (
        <>
            <AppBar position="static" color="primary">
                <StyledToolbar >
                    
                    <Typography>About</Typography>
                    <Typography>Skills</Typography>
                    <Typography>Projects</Typography>
                </StyledToolbar >
            </AppBar>
        </>
    )
}

export default NavBar