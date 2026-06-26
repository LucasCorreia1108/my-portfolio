import { useEffect, useState, useRef } from "react";
import { Box, Container, Typography, styled } from "@mui/material";

const StyledAboutSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.secondary.light,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "40vh",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(8, 0),
  },
}));

const AboutContent = styled(Box)(({ theme }) => ({
  maxWidth: 760,
  width: "100%",
  textAlign: "center",
  padding: theme.spacing(0, 2),
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius,
  border: `1px solid rgba(255,255,255,0.12)`,
  boxShadow: "0 18px 50px rgba(0, 0, 0, 0.08)",
  opacity: 0,
  transform: "translateY(40px)",
  transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0px)",
  },
}));

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StyledAboutSection ref={aboutRef}>
      <Container maxWidth="md">
        
        <AboutContent className={isVisible ? "visible" : ""}>
            <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            textAlign: "center",
            color: (theme) => theme.palette.secondary.contrastText,
            opacity: 0,
            transform: "translateY(30px)",
            animation: isVisible ? "slideUp 1.8s cubic-bezier(0.24, 1.56, 0.64, 1) forwards" : "none",
            "@keyframes slideUp": {
              from: {
                opacity: 0,
                transform: "translateY(20px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          Sobre
        </Typography>
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.secondary.contrastText,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              letterSpacing: "0.01em",
              display:"flex",
              justifyContent:"center",
            }}
          >
            Desenvolvedor Front-End com mais de 4 anos de experiência no
            desenvolvimento e manutenção de aplicações web corporativas.
              Atuação com React, JavaScript, TypeScript, integração com APIs
              REST e metodologias ágeis. Experiência em projetos para grandes
              empresas, incluindo BTG Pactual e Pague Menos.
            </Typography>
          </AboutContent>
      </Container>
    </StyledAboutSection>
  );
};
