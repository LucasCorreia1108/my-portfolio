import { Box, Card, CardActionArea, CardContent, Grow, Typography, styled } from "@mui/material";
import { useState } from "react";

interface CardProps {
  id: React.Key;
  title: string;
  description?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(180deg, rgba(15, 23, 42, 0.68), rgba(30, 41, 59, 0.48))",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(148, 163, 184, 0.16)",
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  boxShadow: "0 24px 60px rgba(2, 6, 23, 0.22)",
  color: theme.palette.secondary.main,
  height: "100%",
  "&:hover": {
    transform: "translateY(-12px) scale(1.02)",
    background: "linear-gradient(180deg, rgba(15, 23, 42, 0.82), rgba(30, 41, 59, 0.58))",
    borderColor: "rgba(56, 189, 248, 0.26)",
    boxShadow: "0 30px 90px rgba(2, 6, 23, 0.3)",
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  padding: theme.spacing(3),
}));

export const Cards = ({ cardsArray, visible }: { cardsArray: CardProps[]; visible: boolean }) => {
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
        gap: 3,
      }}
    >
      {cardsArray.map((card: CardProps, index: number) => (
        <Grow
          key={card.id}
          in={visible}
          timeout={600}
          style={{ transitionDelay: `${index * 30}ms`, transformOrigin: "top center" }}
        >
          <StyledCard>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    borderColor: "rgba(56, 189, 248, 0.32)",
                },
              }}
            >
              <StyledCardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.85,
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                  }}
                >
                  {card.description}
                </Typography>
              </StyledCardContent>
            </CardActionArea>
          </StyledCard>
        </Grow>
      ))}
    </Box>
  );
};