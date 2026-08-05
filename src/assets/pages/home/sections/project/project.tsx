import {
  Box,
  Chip,
  Container,
  Grow,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Project {
  id: React.Key;
  title: string;
  description: string;
  tech: string[];
  image: string;
  repoUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "My Menu",
    description:
      "Cardápio digital de um restaurante de culinária italiana: o cliente navega pelos pratos, monta o carrinho e finaliza o pedido. SPA em React consumindo uma API REST própria, com autenticação, carrinho e feedback global via Snackbar.",
    tech: ["React", "Vite", "React Router", "MUI", "Yup", "Node.js", "express"],
    image: "/my_menu_tl.png",
    repoUrl: "https://github.com/LucasCorreia1108/my_menu_frontend",
    liveUrl: "https://my-menu-frontend-zeta.vercel.app/"
  },
  {
    id: 2,
    title: "GourmetOS",
    description:
      "Sistema para gestão de restaurante com fluxo de atendimento do salão à cozinha e ao caixa, incluindo abertura de mesas, pedidos em tempo real, fechamento de conta e painéis de acompanhamento.",
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "MUI",
      "React Router",
      "TanStack Query",
      "Zustand",
      "Socket.IO Client",
      "React Hook Form",
      "Recharts",
      "NestJS",
      "PostgreSQL",
      "Socket.IO",
      "JWT",
      "cloudinary",
      "Docker",
      "Swagger",
    ],
    image: "/GourmetOS_tl.png",
    repoUrl: "https://github.com/LucasCorreia1108/restaurant-management-frontend",
    liveUrl: "https://restaurant-management-frontend-9zpuk934r-lucas-correia.vercel.app/"
  },
];

const StyledProjectsSection = styled("section")(({ theme }) => ({
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
      "radial-gradient(circle at 80% -22%, rgba(236, 72, 153, 0.08), transparent 30%), radial-gradient(circle at 20% -56%, rgba(59, 130, 246, 0.08), transparent 30%)",
    pointerEvents: "none",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(8, 0),
  },
}));

const ProjectsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: "-0.02em",
  marginBottom: theme.spacing(4),
  textAlign: "center",
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
}));

const ProjectCard = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: theme.shape.borderRadius,
  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
  color: theme.palette.secondary.main,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(4),
  "&:hover": {
    transform: "translateY(-12px) scale(1.02)",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 30px 90px rgba(0, 0, 0, 0.25)",
  },
}));

const ProjectImage = styled("img")(({ theme }) => ({
  width: "100%",
  aspectRatio: "16 / 10",
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid rgba(255, 255, 255, 0.12)",
  backgroundColor: "rgba(255, 255, 255, 0.04)",
}));

export const Projects = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (sectionRef.current) observer.unobserve(sectionRef.current);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <StyledProjectsSection ref={sectionRef} id="projects">
      <Container maxWidth="lg">
        <Grow in={visible} timeout={800} style={{ transformOrigin: "top center" }}>
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <ProjectsTitle variant="h2">Projetos</ProjectsTitle>
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
                gap: 3,
              }}
            >
              {projects.map((project, index) => (
                <Grow
                  key={project.id}
                  in={visible}
                  timeout={600}
                  style={{
                    transitionDelay: `${index * 30}ms`,
                    transformOrigin: "top center",
                  }}
                >
                  <ProjectCard>
                    <ProjectImage src={project.image} alt={project.title} />
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 700, fontSize: "1.3rem", letterSpacing: "0.01em" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ opacity: 0.85, lineHeight: 1.6, fontSize: "0.95rem" }}
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            color: "secondary.main",
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                          }}
                        />
                      ))}
                    </Stack>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: 2,
                        mt: "auto",
                      }}
                    >
                      <StyledButton href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                        <Typography color="primary.contrastText">GitHub</Typography>
                      </StyledButton>
                      {project.liveUrl && (
                        <StyledButton href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <RemoveRedEyeIcon />
                          <Typography color="primary.contrastText">Ver projeto</Typography>
                        </StyledButton>
                      )}
                    </Box>
                  </ProjectCard>
                </Grow>
              ))}
            </Box>
          </Box>
        </Grow>
      </Container>
    </StyledProjectsSection>
  );
};