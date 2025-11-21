import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../components/helper/animation-lottie";
import GlowCard from "../../components/helper/glow-card";
import lottieFile from "../../assets/lottie/study.json";
import Blur23 from "../../assets/svg/experience/blur-23.svg";
import styles from "./styles";
import GradientBorder from "../../components/GradientBorder";
interface Education {
  id: number;
  title: string;
  institution: string;
  duration: string;
}
const educations: Education[] = [
  {
    id: 1,
    title: "Bachelor Degree",
    duration: "2016 - 2019",
    institution: "Osmania University",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    duration: "2014 - 2016",
    institution: "Scholars Junior College",
  },
  {
    id: 3,
    title: "Secondary School Certificate",
    duration: "2013 - 2016",
    institution: "Govt High School",
  },
];

const Educations: React.FC = () => {
  return (
    <Box sx={styles.container} id="education">
      <GradientBorder />
      <Box sx={styles.titleWrapper}>
        <Typography sx={styles.titleText}>Educations</Typography>
        <Box sx={styles.titleUnderline} />
      </Box>
      <Box sx={styles.leftSection}>
        <AnimationLottie animationPath={lottieFile} />
      </Box>
      <Box sx={styles.rightSection}>
        <Stack spacing={2}>
          {educations.map((experience) => (
            <GlowCard
              key={experience.id}
              identifier={`experience-${experience.id}`}
            >
              <Box sx={styles.cardWrapper}>
                <Box
                  component="img"
                  src={Blur23}
                  alt="Hero"
                  sx={styles.cardBgImage}
                />
                <Box sx={styles.durationBox}>
                  <Typography variant="body2" sx={styles.durationText}>
                    {experience.duration}
                  </Typography>
                </Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={3}
                  px={3}
                  py={3}
                >
                  <Box sx={styles.iconBox}>
                    <BsPersonWorkspace size={36} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={styles.title}>
                      {experience.title}
                    </Typography>
                    <Typography variant="body2" sx={styles.company}>
                      {experience.institution}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </GlowCard>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Educations;
