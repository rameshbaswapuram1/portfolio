import { Box, Typography } from "@mui/material";
import ProfileImage from "../../assets/images/ProfileImage.jpg";
import { styles } from "./styles";

const About = () => {
  return (
    <Box sx={styles.aboutContainer} id="about">
      <Box sx={styles.textContainer}>
        <Typography sx={styles.subHeading}>WHO I AM?</Typography>
        <Typography sx={styles.description}>
          My name is B. Ramesh, a passionate and result-driven Software Engineer
          specializing in JavaScript and modern web technologies. I am a quick
          learner with a strong self-learning attitude and a deep interest in
          exploring emerging technologies. I'm enthusiastic about solving
          complex problems and building high-quality, scalable web applications.
          JavaScript is my core strength. I am open to opportunities that align
          with my skills, interests, and growth mindset, and I'm always eager to
          contribute to impactful projects.
        </Typography>
      </Box>
      <Box sx={styles.imageSection}>
        <Box sx={styles.aboutLabelContainer}>
          <Typography sx={styles.aboutLabel}>ABOUT ME</Typography>
          <Box sx={styles.aboutLabelLine} />
        </Box>
        <Box>
          <Box sx={styles.cardContainer}>
            <Box id="inner" sx={styles.cardInner}>
              <Box id="front" sx={styles.cardFront}>
                <Box
                  component="img"
                  src={ProfileImage}
                  sx={styles.profileImage}
                />
              </Box>
              <Box id="back" sx={styles.cardBack}>
                <Typography sx={styles.cardText}>
                  Open to Opportunities
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
