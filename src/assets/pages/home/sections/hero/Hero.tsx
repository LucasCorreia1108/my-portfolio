import { StyledAvatar, StyledHero } from "./styled";
import Avatar from "../../../../../assets/images/avatar.jpeg";
import { Box, Container, Grid, Typography } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import EmailIcon from "@mui/icons-material/Email";
import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import backgroundAnime from "../../../../../assets/images/Background _animation.svg";

export const Hero = () => {
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
                  }}
                >
                 <img src={backgroundAnime} alt="Background Animation" />
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    textAlign: "center",
                  }}
                >
                  <StyledAvatar src={Avatar} alt="Avatar" />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography  variant="h1" sx={{ color: "primary.contrastText", textAlign: "center" }}>
                Lucas Correia
              </Typography>
              <Typography variant="h2" sx={{ color: "primary.contrastText", textAlign: "center" }}>
                I'm Front-End Developer.
              </Typography>
              <Grid
                spacing={3}
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid size={{ xs: 12, md: 4 }} sx={{paddingTop: 3}}>
                  <StyledButton>
                    <DownloadForOfflineIcon />
                    <Typography color="primary.contrastText" sx={{ textAlign: "center" }}>
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{paddingTop: 3}}>
                  <StyledButton>
                    <EmailIcon />
                    <Typography  color="primary.contrastText" sx={{ textAlign: "center" }}>
                      Contact Me
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </div>
  );
};
