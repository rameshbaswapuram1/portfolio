import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../components/helper/animation-lottie";
import GlowCard from "../../components/helper/glow-card";
import experienceAnimation from "../../assets/lottie/code.json";
import Blur23 from "../../assets/svgs/experience/blur-23.svg";
interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
}

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

const Experiences: React.FC = () => {
  return (
    <Box
      sx={{
        py: "10%",
        mt: { xs: "10%", md: "0%" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        borderTop: "1px solid #25213b",
        borderBottom: "1px solid #25213b",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translate(-50%, -50%)",
          top: { xs: "0%", md: "30px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            bgcolor: "#1a1443",
            fontSize: "18px",
            px: 2,
            py: 1.1,
            borderRadius: 2,
          }}
        >
          Experiences
        </Typography>
        <Box
          sx={{
            width: 250,
            height: 5,
            bgcolor: "#1a1443",
            position: "absolute",
            zIndex: "-1",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <AnimationLottie animationPath={experienceAnimation} />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Stack spacing={2}>
          {experiences.map((experience) => (
            <GlowCard
              key={experience.id}
              identifier={`experience-${experience.id}`}
            >
              <Box px={3} py={1} position="relative">
                <Box
                  component="img"
                  src={Blur23}
                  alt="Hero"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    opacity: 0.8,
                    width: "100%",
                    height: "100%",
                  }}
                />

                <Box display="flex" justifyContent="center">
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      color: "#16f2b3",
                    }}
                  >
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
                  <Box
                    sx={{
                      color: "#8b5cf6",
                      transition: "all 0.3s ease",
                      "&:hover": { transform: "scale(1.25)" },
                    }}
                  >
                    <BsPersonWorkspace size={36} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.25rem" },
                        mb: 1,
                        textTransform: "uppercase",
                        color: "white",
                      }}
                    >
                      {experience.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        color: "white",
                      }}
                    >
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
