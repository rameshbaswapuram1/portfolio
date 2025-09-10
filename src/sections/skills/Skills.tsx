import { Box, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
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
    <Box
      sx={{
        pt: "10%",
        mt: { xs: "10%", md: "0%" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        borderTop: "1px solid #25213b",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          transform: "translateY(-1px)",
        }}
      >
        <Box sx={{ width: "75%" }}>
          <Box
            sx={{
              height: "1px",
              width: "100%",
              background:
                "linear-gradient(to right, transparent, #8b5cf6, transparent)",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100px",
          height: "100px",
          bgcolor: " #ede9fe",
          borderRadius: "50%",
          position: "absolute",
          top: "-2px",
          left: "45.5%",
          transform: "translateX(-50%,-45%)",
          filter: "blur(48px)",
          opacity: 0.2,
        }}
      />
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
          Skills
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

      <Box sx={{ width: "100%", my: 12 }}>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover
          pauseOnClick
          delay={0}
          play
          direction="left"
        >
          {skillsData.map((skill: string, id: number) => (
            <Box
              key={id}
              sx={{
                width: "9rem",
                minWidth: "fit-content",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.5s ease",
                m: { xs: 1.5, sm: 2.5 },
                borderRadius: "0.5rem",
                position: "relative",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.15)",
                },
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "0.5rem",
                  border: "1px solid #1f223c",
                  backgroundColor: "#11152c",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    borderColor: "#8b5cf6",
                  },
                }}
              >
                {/* top gradient line */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    transform: "translateY(-1px)",
                  }}
                >
                  <Box sx={{ width: "75%" }}>
                    <Box
                      sx={{
                        height: "1px",
                        width: "100%",
                        background:
                          "linear-gradient(to right, transparent, #8b5cf6, transparent)",
                      }}
                    />
                  </Box>
                </Box>

                {/* content */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                    p: 3,
                  }}
                >
                  <Box sx={{ height: { xs: "2rem", sm: "2.5rem" } }}>
                    <Box
                      component={"img"}
                      //  src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      style={{
                        height: "100%",
                        width: "auto",
                        borderRadius: "0.5rem",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "0.875rem", sm: "1.125rem" },
                    }}
                  >
                    {skill}
                  </Typography>
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
