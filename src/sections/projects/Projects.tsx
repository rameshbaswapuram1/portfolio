import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../utils/projectsData";

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        // position: "relative",
        zIndex: 50,
        my: { xs: 6, lg: 12 }, // tailwind: my-12 lg:my-24 (48px / 96px)
      }}
    >
      {/* Sticky header */}
      <Box
        sx={{
          position: "sticky",
          top: "50px" /* tailwind top-10 = 2.5rem = 40px */,
        }}
      >
        {/* violet blurred circle */}
        <Box
          sx={{
            width: 80,
            height: 80,
            bgcolor: "#f5f3ff", // tailwind violet-100
            borderRadius: "50%",
            position: "absolute",
            top: -12, // -top-3 => -0.75rem => -12px
            left: 0,
            transform: "translateX(50%)",
            filter: "blur(48px)", // blur-3xl ~ large blur
            opacity: 0.3,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
          }}
        >
          <Typography
            component="span"
            sx={{
              bgcolor: "#1a1443",
              color: "#ffffff",
              position: "absolute",
              left: 0,
              px: "20px", // px-5 => 1.25rem => 20px
              py: "12px", // py-3 => 0.75rem => 12px
              fontSize: "1.25rem", // text-xl
              borderRadius: "6px", // rounded-md
              zIndex: 2,
            }}
          >
            PROJECTS
          </Typography>

          {/* horizontal line */}
          <Box sx={{ width: "100%", height: "2px", bgcolor: "#1a1443" }} />
        </Box>
      </Box>

      {/* Projects list */}
      <Box sx={{ pt: 10 /* pt-24 => 6rem => 96px => MUI spacing 12 */ }}>
        <Box
          sx={{
            mt: "10%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {projectsData.slice(0, 4).map((project, index) => (
            <Box
              key={index}
              sx={{
                position: "sticky",
                top: `calc(${index + 1} * ${index ? "5rem" : "6.5rem"})`, //
                width: "100%",
                mx: "auto",
                maxWidth: 672,
                zIndex: index + 1,
              }}
            >
              <Box
                sx={{
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  boxShadow: "0 0 30px rgba(0,0,0,0.3)",
                  transition: "all 0.5s",
                }}
              >
                <ProjectCard project={project} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
