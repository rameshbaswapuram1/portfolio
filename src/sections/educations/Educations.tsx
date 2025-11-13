import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../components/helper/animation-lottie";
import GlowCard from "../../components/helper/glow-card";
import lottieFile from "../../assets/lottie/study.json";

import Blur23 from "../../assets/svgs/experience/blur-23.svg";
import styles from "./styles";

interface Education {
  id: number;
  title: string;
  company: string;
  duration: string;
}

const educations: Education[] = [
  {
    id: 1,
    title: "Software Engineer I",
    company: "Teton Private Ltd.",
    duration: "(Jan 2022 - Present)",
  },
  {
    id: 2,
    title: "FullStack Developer",
    company: "Fiverr (freelance)",
    duration: "(Jun 2021 - Jan 2022)",
  },
  {
    id: 3,
    title: "Self Employed",
    company: "Code and build something in everyday.",
    duration: "(Jan 2018 - Present)",
  },
];

const Experiences: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.titleWrapper}>
        <Typography sx={styles.titleText}>Experiences</Typography>
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
