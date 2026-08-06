import { styled } from "@mui/material";

interface StyledButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  href,
  download,
  onClick,
  ...rest
}) => {
  const StyledBtn = styled("a")(({ theme }) => ({
    width: "100%",
    maxWidth: 250,
    padding: "0.95rem 1.4rem",
    borderRadius: 999,
    border: "1px solid rgba(148, 163, 184, 0.2)",
    background:
      "linear-gradient(135deg, rgba(15, 23, 42, 0.82), rgba(30, 41, 59, 0.66))",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    lineHeight: 1,
    gap: "0.75rem",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.35s ease",
    boxShadow: "0 18px 40px rgba(2, 6, 23, 0.28)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    textDecoration: "none",
    "&:hover": {
      transform: "translateY(-3px)",
      background: "linear-gradient(135deg, rgba(56, 189, 248, 0.95), rgba(59, 130, 246, 0.95))",
      color: "#020617",
      borderColor: "transparent",
      boxShadow: "0 22px 50px rgba(56, 189, 248, 0.22)",
    },
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));

  return (
    <StyledBtn
      href={href}
      download={download}
      onClick={(event) => {
        if (!href) event.preventDefault();
        onClick?.(event as React.MouseEvent<HTMLAnchorElement, MouseEvent>);
      }}
      {...rest}
    >
      {children}
    </StyledBtn>
  );
};
