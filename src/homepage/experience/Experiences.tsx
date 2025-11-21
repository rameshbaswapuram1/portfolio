import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../components/helper/animation-lottie";
import GlowCard from "../../components/helper/glow-card";
import experienceAnimation from "../../assets/lottie/code.json";
import Blur23 from "../../assets/svg/experience/blur-23.svg";
import { styles } from "./styles";
interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Lead Engineer",
    company: "HCLTech",
    duration: "(Feb 2025 - Present)",
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    company: "Extended Web AppTech LLP",
    duration: "(Oct 2023 - Jan 2025)",
  },
  {
    id: 3,
    title: "FullStack Developer",
    company: "Gincat Software Solutions LLP",
    duration: "(Aug 2022 - Sep 2023)",
  },
  {
    id: 4,
    title: "Content Management Advisor",
    company: "Data Core Technologies Limited",
    duration: "(Dec 2021 - Aug 2022)",
  },
];

const Experiences: React.FC = () => {
  return (
    <Box sx={styles.container} id="experience">
      <Box sx={styles.titleWrapper}>
        <Typography sx={styles.titleText}>Experiences</Typography>
        <Box sx={styles.titleLine} />
      </Box>
      <Box sx={styles.leftSection}>
        <AnimationLottie animationPath={experienceAnimation} />
      </Box>
      <Box sx={styles.rightSection}>
        <Stack spacing={2}>
          {experiences.map((experience) => (
            <GlowCard
              key={experience.id}
              identifier={`experience-${experience.id}`}
            >
              <Box sx={styles.glowCardBox}>
                <Box
                  component="img"
                  src={Blur23}
                  alt="Hero"
                  sx={styles.blurBg}
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
                  <Box sx={styles.icon}>
                    <BsPersonWorkspace size={36} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={styles.jobTitle}>
                      {experience.title}
                    </Typography>
                    <Typography variant="body2" sx={styles.company}>
                      {experience.company}
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

export default Experiences;
