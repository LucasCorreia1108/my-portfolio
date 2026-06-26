import { Box, Card, CardActionArea, CardContent, Typography, styled } from "@mui/material";
import { useState } from "react";

interface CardProps {
  id: React.Key;
  title: string;
  description?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
  color: theme.palette.secondary.main,
  height: "100%",
  "&:hover": {
    transform: "translateY(-12px) scale(1.02)",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 30px 90px rgba(0, 0, 0, 0.25)",
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

export const Cards = ({ cardsArray }: { cardsArray: CardProps[] }) => {
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
        <StyledCard key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "rgba(1, 75, 116, 0.15)",
                borderColor: "rgba(100, 200, 255, 0.3)",
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
      ))}
    </Box>
  );
};