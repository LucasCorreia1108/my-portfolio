import { styled } from "@mui/material";

export const StyledHero = styled("div")(({theme}) => ({
      backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }
}));
export const StyledAvatar = styled("img")(({theme}) => ({
    width: "80%",
    borderRadius: "50%",
    border: `5px solid ${theme.palette.primary.contrastText}`,
}));