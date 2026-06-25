import { styled } from "@mui/material";

interface StyledButtonProps {
  children: React.ReactNode;
}

export const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  const StyledBtn = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    padding: "0.25em 1em",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.primary.main,
    },
  }));

  return (
    <>
      <StyledBtn>
        {children}
      </StyledBtn>
    </>
  );
};
