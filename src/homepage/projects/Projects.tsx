import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../utils/projectsData";
import { styles } from "./projects.styles";

const Projects = () => {
  return (
    <Box sx={styles.container} id="projects">
      {/* Sticky Header */}
      <Box sx={styles.stickyHeader}>
        <Box sx={styles.violetCircle} />

        <Box sx={styles.headerWrapper}>
          <Typography component="span" sx={styles.headerText}>
            PROJECTS
          </Typography>
          <Box sx={styles.line} />
        </Box>
      </Box>

      {/* Project List */}
      <Box sx={styles.projectsWrapper}>
        <Box sx={styles.projectsList}>
          {projectsData.slice(0, 4).map((project, index) => (
            <Box key={index} sx={styles.stickyProject(index)}>
              <Box sx={styles.cardBox}>
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
