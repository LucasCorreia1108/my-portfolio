import { AppBar, Toolbar, Typography, styled } from "@mui/material"


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
                    
                    <Typography component="a" href="#about" style={{ textDecoration: "none", color: "inherit" }}>About</Typography>
                    <Typography component="a" href="#skill" style={{ textDecoration: "none", color: "inherit" }}>Skills</Typography>
                    <Typography component="a" href="#projects" style={{ textDecoration: "none", color: "inherit" }}>Projects</Typography>
                </StyledToolbar >
            </AppBar>
        </>
    )
}

export default NavBar