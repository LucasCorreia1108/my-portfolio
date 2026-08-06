import { styled } from "@mui/material";

export const StyledHero = styled("div")(({ theme }) => ({
  position: "relative",
  minHeight: "100svh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${theme.spacing(10)} ${theme.spacing(2)}`,
  overflow: "hidden",
  background:
    "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.18), transparent 28%), radial-gradient(circle at 80% 12%, rgba(168, 85, 247, 0.16), transparent 24%), linear-gradient(135deg, #060b17 0%, #0b1220 50%, #09111d 100%)",
  boxShadow: "inset 0 0 120px rgba(2, 6, 23, 0.42)",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
    pointerEvents: "none",
  },
  [theme.breakpoints.up("md")]: {
    padding: `${theme.spacing(12)} ${theme.spacing(4)}`,
  },
}));

export const StyledAvatar = styled("img")(() => ({
  width: "100%",
  maxWidth: 420,
  aspectRatio: "1",
  borderRadius: "50%",
  border: "2px solid rgba(148, 163, 184, 0.28)",
  boxShadow: "0 30px 90px rgba(2, 6, 23, 0.45)",
  transition: "transform 0.45s ease, filter 0.45s ease",
  background: "linear-gradient(180deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))",
  "&:hover": {
    transform: "translateY(-8px) scale(1.04)",
    filter: "saturate(1.08) contrast(1.03)",
  },
}));