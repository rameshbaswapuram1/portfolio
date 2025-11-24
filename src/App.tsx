import { lazy, Suspense } from "react";
import { Container, CircularProgress, Box } from "@mui/material";

const Header = lazy(() => import("./components/Header"));
const BackGroundImage = lazy(() => import("./components/BackGroundImage"));
const HeroSection = lazy(() => import("./homepage/hero-section/HeroSection"));
const About = lazy(() => import("./homepage/about/About"));
const Experiences = lazy(() => import("./homepage/experience/Experiences"));
const Skills = lazy(() => import("./homepage/skills/Skills"));
const Projects = lazy(() => import("./homepage/projects/Projects"));
const Educations = lazy(() => import("./homepage/education/Educations"));
const Contact = lazy(() => import("./homepage/contact/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <Suspense
      fallback={
        <Box sx={fallBackStyle}>
          <CircularProgress />
        </Box>
      }
    >
      <Container maxWidth="lg">
        <BackGroundImage isSection={false}>
          <Header />
          <HeroSection />
        </BackGroundImage>
        <About />
        <BackGroundImage isSection={true}>
          <Experiences />
        </BackGroundImage>
        <Skills />
        <Projects />
        <BackGroundImage isSection={true}>
          <Educations />
        </BackGroundImage>
        <Contact />
        <Footer />
      </Container>
    </Suspense>
  );
};

export default App;

const fallBackStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
};
