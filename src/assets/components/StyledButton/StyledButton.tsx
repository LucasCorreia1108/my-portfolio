import { styled } from "@mui/material";

interface StyledButtonProps {
  children: React.ReactNode;
}

export const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  const StyledBtn = styled("button")(({ theme }) => ({
    width: "100%",
    maxWidth: 250,
    padding: "0.85rem 1.75rem",
    borderRadius: 999,
    border: "1px solid rgba(255, 255, 255, 0.18)",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.35s ease",
    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.16)",
    backdropFilter: "blur(12px)",
    webkitBackdropFilter: "blur(12px)",
    "&:hover": {
      transform: "translateY(-2px)",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.dark,
      borderColor: "transparent",
      boxShadow: "0 22px 50px rgba(0, 0, 0, 0.24)",
    },
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));

  return (
    <StyledBtn>
      {children}
    </StyledBtn>
  );
};
