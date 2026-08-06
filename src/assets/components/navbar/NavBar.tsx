import { AppBar, Box, Toolbar, styled } from "@mui/material"


const NavBar = () => {


    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        color: "primary.contrastText",
        minHeight: 72,
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        paddingInline: "1rem",
    }))

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: "rgba(6, 11, 23, 0.72)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderBottom: "1px solid rgba(148, 163, 184, 0.12)",
                }}
            >
                <StyledToolbar >

                    <Box
                        component="a"
                        href="#about"
                        sx={{
                            textDecoration: "none",
                            color: "secondary.main",
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                            transition: "color 0.25s ease, transform 0.25s ease",
                            '&:hover': {
                                color: "primary.contrastText",
                                transform: "translateY(-1px)",
                            },
                        }}
                    >
                        About
                    </Box>
                    <Box
                        component="a"
                        href="#skill"
                        sx={{
                            textDecoration: "none",
                            color: "secondary.main",
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                            transition: "color 0.25s ease, transform 0.25s ease",
                            '&:hover': {
                                color: "primary.contrastText",
                                transform: "translateY(-1px)",
                            },
                        }}
                    >
                        Skills
                    </Box>
                    <Box
                        component="a"
                        href="#projects"
                        sx={{
                            textDecoration: "none",
                            color: "secondary.main",
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                            transition: "color 0.25s ease, transform 0.25s ease",
                            '&:hover': {
                                color: "primary.contrastText",
                                transform: "translateY(-1px)",
                            },
                        }}
                    >
                        Projects
                    </Box>
                </StyledToolbar >
            </AppBar>
        </>
    )
}

export default NavBar