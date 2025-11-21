import { Box, Button, Typography } from "@mui/material";
import { helloText, styles as sharedStyles, styles } from "./styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const accounts = [
  { link: "", icon: <BsGithub size={30} /> },
  { link: "", icon: <BsLinkedin size={30} /> },
];

const skills = [
  "Html",
  "CSS",
  "Javascript",
  "Typescript",
  "React JS",
  "React-redux-toolkit",
  "Material UI",
];

const qualities = [
  "hardWorker:",
  "quickLearner:",
  "problemSolver:",
  "teamPlayer:",
];
const resume =
  "https://drive.google.com/file/d/1IteReyDQcxoe-bNbmJoohLErYivLh6gX/view?usp=drive_link";
const HeroSection = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.leftSection}>
        <Typography sx={helloText()}>Hello,</Typography>
        <Typography component="span" sx={helloText()}>
          This is
        </Typography>
        <Typography component="span" sx={helloText("secondary")}>
          {" B Ramesh"}
        </Typography>
        <Typography component="span" sx={helloText()}>
          {". I'm a Professional "}
        </Typography>
        <Typography component="span" sx={helloText("primary")}>
          Software Engineer
        </Typography>
        <Typography component="span" sx={helloText("primary")}>
          .
        </Typography>
        <Box sx={styles.socialLinks}>
          {accounts.map((account, i) => (
            <Typography key={i} component="a" sx={sharedStyles.anchoreLink}>
              {account.icon}
            </Typography>
          ))}
        </Box>
        <Box sx={styles.buttonsContainer}>
          <Typography
            component="a"
            href="tel:+919701378218"
            sx={styles.gradientBorder}
          >
            <Button sx={styles.contactButton}>
              <BsFillTelephoneFill size={16} />
              <span>Call me</span>
            </Button>
          </Typography>
          <Typography
            target="_blank"
            download
            component="a"
            href={resume}
            role="button"
            sx={styles.resumeButton}
          >
            <MdDownload size={16} />
            <Box component="span">Get Resume</Box>
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.rightSection}>
        <Box sx={styles.windowHeader}>
          <Box sx={styles.windowDotsContainer}>
            <Box sx={styles.redDot} />
            <Box sx={styles.orangeDot} />
            <Box sx={styles.greenDot} />
          </Box>
        </Box>
        <Box sx={styles.codeBox}>
          <Typography component="div">
            <Box component="span" sx={styles.pinkText}>
              const
            </Box>
            <Box component="span" sx={styles.whiteText}>
              coder
            </Box>
            <Box component="span" sx={styles.pinkText}>
              =
            </Box>
            <Box component="span" sx={styles.grayText}>
              {"{"}
            </Box>
          </Typography>
          <Typography component="div" sx={styles.indent1}>
            <Box component="span" sx={styles.whiteText}>
              name:
            </Box>
            <Box component="span" sx={styles.grayText}>
              '
            </Box>
            <Box component="span" sx={styles.yellowText}>
              B Ramesh
            </Box>
            <Box component="span" sx={styles.grayText}>
              ',
            </Box>
          </Typography>
          <Typography component="div" sx={styles.indent1}>
            <Box component="span" sx={styles.whiteText}>
              skills:
            </Box>
            <Box component="span" sx={styles.grayText}>
              ['
            </Box>
            {skills.map((skill, i) => (
              <Box key={i} component="span" sx={styles.yellowText}>
                {skill}
                {i !== skills.length - 1 && (
                  <Box component="span" sx={styles.grayText}>
                    {"', "}
                  </Box>
                )}
              </Box>
            ))}
            <Box component="span" sx={styles.grayText}>
              {" ],"}
            </Box>
          </Typography>
          {qualities.map((quality, i) => (
            <Typography key={i} component="div" sx={styles.indent1}>
              <Box component="span" sx={styles.whiteText}>
                {quality}
              </Box>
              <Box component="span" sx={styles.orangeText}>
                true
              </Box>
              ,
            </Typography>
          ))}
          <Typography component="div" sx={styles.indent1}>
            <Box component="span" sx={styles.greenText}>
              hireable:
            </Box>
            <Box component="span" sx={styles.orangeText}>
              function
            </Box>
            <Box component="span" sx={styles.grayText}>
              {"() {"}
            </Box>
          </Typography>
          <Typography component="div" sx={styles.indent2}>
            <Box component="span" sx={styles.orangeText}>
              return
            </Box>
            <Box component="span" sx={styles.grayText}>
              {"("}
            </Box>
          </Typography>
          <Typography component="div" sx={styles.indent3}>
            <Box component="span" sx={styles.cyanText}>
              this.
            </Box>
            <Box component="span" sx={styles.whiteText}>
              hardWorker
            </Box>
            <Box component="span" sx={styles.yellowText}>
              &&
            </Box>
          </Typography>
          <Typography component="div" sx={styles.indent3}>
            <Box component="span" sx={styles.cyanText}>
              this.
            </Box>
            <Box component="span" sx={styles.whiteText}>
              problemSolver
            </Box>
            <Box component="span" sx={styles.yellowText}>
              &&
            </Box>
          </Typography>
          <Typography component="div" sx={styles.indent3}>
            <Box component="span" sx={styles.cyanText}>
              this.
            </Box>
            <Box component="span" sx={styles.whiteText}>
              skills.length
            </Box>
            <Box component="span" sx={styles.yellowText}>
              &gt;=
            </Box>
            <Box component="span" sx={styles.orangeText}>
              5
            </Box>
          </Typography>
          <Typography component="div" sx={styles.indent2Gray}>
            {");"}
          </Typography>
          <Typography component="div" sx={styles.indent1Gray}>
            {"};"}
          </Typography>
          <Typography component="div" sx={styles.grayText}>
            {"};"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
