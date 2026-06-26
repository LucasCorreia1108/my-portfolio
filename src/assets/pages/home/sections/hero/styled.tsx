import { styled } from "@mui/material";

export const StyledHero = styled("div")(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${theme.spacing(10)} ${theme.spacing(2)}`,
  overflow: "hidden",
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 45%, rgba(35, 35, 35, 0.95) 100%)`,
  boxShadow: "inset 0 0 120px rgba(0, 0, 0, 0.32)",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at top left, rgba(59, 130, 246, 0.22), transparent 30%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.18), transparent 28%)",
    pointerEvents: "none",
  },
  [theme.breakpoints.up("md")]: {
    padding: `${theme.spacing(12)} ${theme.spacing(4)}`,
  },
}));

export const StyledAvatar = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: 340,
//   aspectRatio: "1",
  borderRadius: "50%",
  border: `6px solid ${theme.palette.secondary.main}`,
  boxShadow: "0 24px 70px rgba(0, 0, 0, 0.35)",
  transition: "transform 0.45s ease, filter 0.45s ease",
  backgroundColor: theme.palette.primary.dark,
  "&:hover": {
    transform: "translateY(-8px) scale(1.04)",
    filter: "saturate(1.08)",
  },
}));