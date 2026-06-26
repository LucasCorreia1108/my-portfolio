import { Box, Container, Grow, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Cards } from "../../../../components/Cards/cards";

const StyledSkillsSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "auto",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08), transparent 30%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.08), transparent 30%)",
    pointerEvents: "none",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(8, 0),
  },
}));

const SkillsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: "-0.02em",
  marginBottom: theme.spacing(4),
  textAlign: "center",
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
}));

export const Skills = () => {
  const [visible, setVisible] = useState(false);
  const cardsArray = [
    {
      id: 1,
      title: "React",
    },
    {
      id: 2,
      title: "JavaScript",
    },
    {
      id: 3,
      title: "TypeScript",
    },
    {
      id: 4,
      title: "CSS3",
    },

    {
      id: 5,
      title: "HTML5",
    },
    {
      id: 6,
      title: " APIs REST",
    },
    {
      id: 7,
      title: "Jest",
    },
    {
      id: 8,
      title: "Git",
    },
    {
      id: 9,
      title: "GitHub",
    },
  ];

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <StyledSkillsSection>
      <Container maxWidth="lg">
        <Grow
          in={visible}
          timeout={800}
          style={{ transformOrigin: "top center" }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <SkillsTitle variant="h2">Habilidades</SkillsTitle>
            <Cards cardsArray={cardsArray} />
          </Box>
        </Grow>
      </Container>
    </StyledSkillsSection>
  );
};
