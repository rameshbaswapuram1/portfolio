import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../components/helper/animation-lottie";
import GlowCard from "../../components/helper/glow-card";
import lottieFile from "../../assets/lottie/study.json";
import Blur23 from "../../assets/svg/experience/blur-23.svg";
import styles from "./styles";
import GradientBorder from "../../components/GradientBorder";
import { useTranslation } from "react-i18next";

interface Education {
  id: number;
  title: string;
  institution: string;
  duration: string;
}

const Educations: React.FC = () => {
  const { t } = useTranslation();
  const rawEducations = t("education.list", { returnObjects: true });
  const educations: Education[] = Array.isArray(rawEducations)
    ? rawEducations
    : [];
  return (
    <Box sx={styles.container} id="education">
      <GradientBorder />
      <Box sx={styles.titleWrapper}>
        <Typography sx={styles.titleText}>{t("education.title")}</Typography>
        <Box sx={styles.titleUnderline} />
      </Box>

      <Box sx={styles.leftSection}>
        <AnimationLottie animationPath={lottieFile} />
      </Box>

      <Box sx={styles.rightSection}>
        <Stack spacing={2}>
          {educations.map((edu) => (
            <GlowCard key={edu.id} identifier={`education-${edu.id}`}>
              <Box sx={styles.cardWrapper}>
                <Box
                  component="img"
                  src={Blur23}
                  alt="Hero"
                  sx={styles.cardBgImage}
                />
                <Box sx={styles.durationBox}>
                  <Typography variant="body2" sx={styles.durationText}>
                    {edu.duration}
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
                      {edu.title}
                    </Typography>
                    <Typography variant="body2" sx={styles.company}>
                      {edu.institution}
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
