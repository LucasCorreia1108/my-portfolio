import { StyledAvatar, StyledHero } from "./styled";
import Avatar from "../../../../../assets/images/avatar.jpeg";
import { Box, Container, Typography, styled } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import EmailIcon from "@mui/icons-material/Email";
import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import backgroundAnime from "../../../../../assets/images/Background _animation.svg";

const HeroKicker = styled(Typography)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(3),
  borderRadius: 999,
  border: "1px solid rgba(148, 163, 184, 0.2)",
  background: "rgba(15, 23, 42, 0.5)",
  color: theme.palette.secondary.main,
  backdropFilter: "blur(12px)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontSize: "0.72rem",
  fontWeight: 700,
}));

const HeroCopy = styled(Typography)(({ theme }) => ({
  maxWidth: 620,
  marginInline: "auto",
  color: theme.palette.secondary.main,
  lineHeight: 1.8,
  fontSize: "1.02rem",
  opacity: 0.92,
  [theme.breakpoints.up("md")]: {
    marginInline: 0,
  },
}));

const contactEmail = "lucascorreianasc1108@gmail.com";
const contactSubject = "Contato%20via%20site";
const contactBody = "Olá%20Lucas,%0D%0A%0D%0AEstou%20interessado%20em%20entrar%20em%20contato%20com%20você.%0D%0A%0D%0AAtenciosamente,";

export const Hero = () => {
  const handleContactClick = () => {
    window.location.href = `mailto:${contactEmail}?subject=${contactSubject}&body=${contactBody}`;
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 6, md: 4 },
            alignItems: "center",
          }}
        >
          <Box>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: -88,
                  right: -24,
                  width: "160%",
                  opacity: 0.65,
                  filter: "blur(1px)",
                }}
              >
                <img src={backgroundAnime} alt="Background Animation" />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  textAlign: "center",
                  zIndex: 1,
                }}
              >
                <StyledAvatar src={Avatar} alt="Lucas Correia" />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box sx={{ position: "relative", zIndex: 1, textAlign: { xs: "center", md: "left" } }}>
              <HeroKicker variant="overline">Front-End Developer | React | TypeScript</HeroKicker>
              <Typography
                variant="h1"
                sx={{
                  color: "primary.contrastText",
                  textAlign: { xs: "center", md: "left" },
                  mb: 2,
                  maxWidth: 720,
                }}
              >
                Lucas Correia
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "secondary.main",
                  textAlign: { xs: "center", md: "left" },
                  fontWeight: 500,
                  mb: 3,
                  maxWidth: 640,
                }}
              >
                Construo interfaces modernas, rápidas e confiáveis para produtos digitais.
              </Typography>
              <HeroCopy variant="body1" sx={{ mb: 4 }}>
                Desenvolvimento de experiências web com foco em arquitetura limpa, componentes reutilizáveis,
                acessibilidade e design system. Ideal para times que precisam de alguém com visão de produto e
                entrega consistente.
              </HeroCopy>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  alignItems: "center",
                }}
              >
                <StyledButton href="/Lucas_Correia_Curriculo.pdf" download>
                  <DownloadForOfflineIcon />
                  <Typography color="primary.contrastText" sx={{ textAlign: "center" }}>
                    Download CV
                  </Typography>
                </StyledButton>
                <StyledButton onClick={handleContactClick}>
                  <EmailIcon />
                  <Typography color="primary.contrastText" sx={{ textAlign: "center" }}>
                    Contato
                  </Typography>
                </StyledButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </StyledHero>
  );
};
