import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { styles } from "./styles";

const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "AWS",
  "Bootstrap",
  "Docker",
  "Go",
  "Figma",
  "Firebase",
  "MaterialUI",
  "Nginx",
  "Strapi",
];

const Skills = () => {
  return (
    <Box sx={styles.container}>
      {/* Top gradient line */}
      <Box sx={styles.gradientLineWrapper}>
        <Box sx={styles.gradientLineInner}>
          <Box sx={styles.gradientLine} />
        </Box>
      </Box>

      {/* Blur circle */}
      <Box sx={styles.blurCircle} />

      {/* Section title */}
      <Box sx={styles.titleWrapper}>
        <Typography sx={styles.titleText}>Skills</Typography>
        <Box sx={styles.titleLine} />
      </Box>

      {/* Skills Marquee */}
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
                {/* Top gradient line inside each card */}
                <Box sx={styles.topGradientLineWrapper}>
                  <Box sx={styles.topGradientLineInner}>
                    <Box sx={styles.topGradientLine} />
                  </Box>
                </Box>

                {/* Skill content */}
                <Box sx={styles.skillContent}>
                  <Box sx={styles.skillImageBox}>
                    <Box
                      component="img"
                      // src={skillsImage(skill)?.src}
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
