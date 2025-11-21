import Header from "./components/Header";
import { Container } from "@mui/material";
import HeroSection from "./homepage/hero-section/HeroSection";
import BackGroundImage from "./components/BackGroundImage";
import About from "./homepage/about/About";
import Experiences from "./homepage/experience/Experiences";
import Skills from "./homepage/skills/Skills";
import Projects from "./homepage/projects/Projects";
import Educations from "./homepage/education/Educations";
import Contact from "./homepage/contact/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
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
  );
};

export default App;
