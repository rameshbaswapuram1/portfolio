import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../components/helper/animation-lottie";
import GlowCard from "../../components/helper/glow-card";
import experienceAnimation from "../../assets/lottie/code.json";
import Blur23 from "../../assets/svgs/experience/blur-23.svg";
import { styles } from "./styles";

// ---- Styles Object ----

// ---- Interface ----
interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
}

// ---- Experience Data ----
const experiences: Experience[] = [
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

// ---- Component ----
const Experiences: React.FC = () => {
  return (
    <Box sx={styles.container}>
      {/* Title */}
      <Box sx={styles.titleWrapper}>
        <Typography sx={styles.titleText}>Experiences</Typography>
        <Box sx={styles.titleLine} />
      </Box>

      {/* Animation Section */}
      <Box sx={styles.leftSection}>
        <AnimationLottie animationPath={experienceAnimation} />
      </Box>

      {/* Experience Cards */}
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
