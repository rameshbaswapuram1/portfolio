import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileImage from "../../assets/images/ProfileImage.jpg";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        my: { xs: "20%", md: "15%" },
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 3, md: 0 },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography
          sx={{
            fontSize: "clamp(1.125rem, 1.0769rem + 0.1923vw, 1.25rem)",
            color: "var(--primary-color)",
            fontWeight: 500,
          }}
        >
          WHO I AM?
        </Typography>
        <Typography
          sx={{ fontSize: "clamp(0.875rem, 0.742rem + 0.4255vw, 1.125rem)" }}
        >
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
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: "50%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "-80px", md: 40 },
            right: { md: "-20px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: { md: "rotate(90deg)" },
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
            ABOUT ME
          </Typography>
          <Box
            sx={{
              width: 200,
              height: 5,
              bgcolor: "#1a1443",
              position: "absolute",
              zIndex: "-1",
              left: { md: 0 },
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              width: 300,
              height: 300,
              perspective: 1000,
              borderRadius: 50,
              "& #inner": {
                animation: "myFlip 3s infinite ease",
                "@keyframes myFlip": {
                  "0%": { transform: "rotateY(0deg)" },
                  "100%": {
                    transform: "rotateY(180deg)",
                  },
                },
              },
              "&:hover #inner": {
                animationPlayState: "paused",
              },
            }}
          >
            <Box
              id="inner"
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                textAlign: "center",
                transition: "transform  1s ",
                transformStyle: "preserve-3d",
              }}
            >
              <Box
                id="front"
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  borderRadius: 50,
                  overflow: "hidden",
                  boxShadow: 5,
                  transform: "rotateY(180deg)",
                }}
              >
                <Box
                  component={"img"}
                  src={ProfileImage}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                id="back"
                sx={{
                  bgcolor: "blue",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  borderRadius: 50,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: 5,
                  backgroundImage:
                    "linear-gradient(62deg, #4158D0 0%, #7c3aed 16%, #ec4899  100%)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "25px",

                    textShadow: "2px 4px black",
                  }}
                >
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
