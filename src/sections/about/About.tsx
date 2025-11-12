import { Box, Typography } from "@mui/material";
import ProfileImage from "../../assets/images/ProfileImage.jpg";
import { styles } from "./styles";

const About = () => {
  return (
    <Box sx={styles.aboutContainer}>
      {/* Text Section */}
      <Box sx={styles.textContainer}>
        <Typography sx={styles.subHeading}>WHO I AM?</Typography>
        <Typography sx={styles.description}>
          My name is B Ramesh. I am a professional and enthusiastic programmer
          in my daily life. I am a quick learner with a self-learning attitude.
          I love to learn and explore new technologies and am passionate about
          problem-solving. I love almost all the stacks of web application
          development and love to make the web more open to the world. My core
          skill is based on JavaScript and I love to do most of the things using
          JavaScript. I am available for any kind of job opportunity that suits
          my skills and interests.
        </Typography>
      </Box>

      {/* Image Section */}
      <Box sx={styles.imageSection}>
        {/* Floating "About Me" label */}
        <Box sx={styles.aboutLabelContainer}>
          <Typography sx={styles.aboutLabel}>ABOUT ME</Typography>
          <Box sx={styles.aboutLabelLine} />
        </Box>

        {/* Rotating Image Card */}
        <Box>
          <Box sx={styles.cardContainer}>
            <Box id="inner" sx={styles.cardInner}>
              {/* Front Side */}
              <Box id="front" sx={styles.cardFront}>
                <Box
                  component="img"
                  src={ProfileImage}
                  sx={styles.profileImage}
                />
              </Box>

              {/* Back Side */}
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
