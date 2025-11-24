import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { styles } from "./projects.styles";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const rawProjects = t("projects.list", { returnObjects: true });

  const projectsData: {
    name: string;
    description: string;
    tools: string[];
    role: string;
  }[] = Array.isArray(rawProjects) ? rawProjects : [];

  return (
    <Box sx={styles.container} id="projects">
      <Box sx={styles.stickyHeader}>
        <Box sx={styles.violetCircle} />
        <Box sx={styles.headerWrapper}>
          <Typography component="span" sx={styles.headerText}>
            {t("projects.title")}
          </Typography>
          <Box sx={styles.line} />
        </Box>
      </Box>

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
