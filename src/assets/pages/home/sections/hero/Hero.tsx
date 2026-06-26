import { StyledAvatar, StyledHero } from "./styled";
import Avatar from "../../../../../assets/images/avatar.jpeg";
import { Box, Container, Grid, Typography } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import EmailIcon from "@mui/icons-material/Email";
import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import backgroundAnime from "../../../../../assets/images/Background _animation.svg";

const contactEmail = "lucascorreianasc1108@gmail.com";
const contactSubject = "Contato%20via%20site";
const contactBody = "Olá%20Lucas,%0D%0A%0D%0AEstou%20interessado%20em%20entrar%20em%20contato%20com%20você.%0D%0A%0D%0AAtenciosamente,";

export const Hero = () => {
  const handleContactClick = () => {
    window.location.href = `mailto:${contactEmail}?subject=${contactSubject}&body=${contactBody}`;
  };

  return (
    <div>
      <StyledHero>
        <Container maxWidth="lg">
         <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: -100,
                    right: 0,
                    width: "150%",
                    opacity: 0.9,
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
                  <StyledAvatar src={Avatar} alt="Avatar" />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: "primary.contrastText",
                    textAlign: "center",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    mb: 2,
                  }}
                >
                  Lucas Correia
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "primary.contrastText",
                    textAlign: "center",
                    fontWeight: 500,
                    mb: 4,
                    opacity: 0.88,
                  }}
                >
                  I&apos;m Front-End Developer.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StyledButton href="/cv-lucas-correia.pdf" download>
                    <DownloadForOfflineIcon />
                    <Typography color="primary.contrastText" sx={{ textAlign: "center" }}>
                      Download CV
                    </Typography>
                  </StyledButton>
                  <StyledButton onClick={handleContactClick}>
                    <EmailIcon />
                    <Typography color="primary.contrastText" sx={{ textAlign: "center" }}>
                      Contact Me
                    </Typography>
                  </StyledButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </div>
  );
};
