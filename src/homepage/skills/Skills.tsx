import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { styles } from "./styles";
import { skillsImage } from "../../utils/svgsExports";
import GradientBorder from "../../components/GradientBorder";
import { useTranslation } from "react-i18next";
const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "Tailwind",
  "Git",
  "Bootstrap",
  "Figma",
  "Firebase",
  "MaterialUI",
  "Markdown",
  "Microsoft Office",
  "Canva",
];
const Skills = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.container} id="skills">
      <GradientBorder />
      <Box sx={styles.blurCircle} />
      <Box sx={styles.titleWrapper}>
        <Typography sx={styles.titleText}>{t("skills.title")}</Typography>
        <Box sx={styles.titleLine} />
      </Box>
      <Box sx={styles.marqueeContainer}>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover
          pauseOnClick
          delay={0}
          play
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <Box key={id} sx={styles.skillCard}>
              <Box sx={styles.skillBox}>
                <Box sx={styles.topGradientLineWrapper}>
                  <Box sx={styles.topGradientLineInner}>
                    <Box sx={styles.topGradientLine} />
                  </Box>
                </Box>
                <Box sx={styles.skillContent}>
                  <Box sx={styles.skillImageBox}>
                    <Box
                      component="img"
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                      style={styles.skillImage}
                    />
                  </Box>
                  <Typography sx={styles.skillText}>{skill}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default Skills;
