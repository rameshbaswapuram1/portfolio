import Header from "./components/Header";
import { Container } from "@mui/material";
import FirstSection from "./sections/firstSection/FirstSection";
import BackGroundImage from "./components/BackGroundImage";
import About from "./sections/about/About";
import Experiences from "./sections/experiences/Experiences";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Educations from "./sections/educations/Educations";

const App = () => {
  return (
    <Container maxWidth="lg">
      <BackGroundImage isSection={false}>
        <Header />
        <FirstSection />
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
      {/* <Box sx={{ height: "100vh" }} /> */}
    </Container>
  );
};

export default App;
