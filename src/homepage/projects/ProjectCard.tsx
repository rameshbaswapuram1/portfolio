import React from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./projectCard.Styles";

interface Project {
  name: string;
  tools: string[];
  role: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Box sx={styles.container}>
      {/* Top gradient lines */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={styles.gradientLineTop} />
        <Box sx={styles.gradientLineBottom} />
      </Box>

      {/* Header */}
      <Box sx={styles.header}>
        <Box sx={styles.trafficLights}>
          <Box sx={styles.redDot} />
          <Box sx={styles.orangeDot} />
          <Box sx={styles.greenDot} />
        </Box>
        <Typography sx={styles.projectTitle}>{project.name}</Typography>
      </Box>

      {/* Code Block */}
      <Box component="code" sx={styles.codeBlock}>
        {/* caret */}
        <Box sx={styles.caretLine}>
          <Typography component="span" sx={styles.pink}>
            const
          </Typography>
          <Typography component="span" sx={styles.white} ml={1}>
            project
          </Typography>
          <Typography component="span" sx={styles.pink} ml={1}>
            =
          </Typography>
          <Typography component="span" sx={styles.gray}>
            {"{"}
          </Typography>
        </Box>

        {/* name */}
        <Box>
          <Typography
            component="span"
            sx={{ ...styles.lineIndent, ...styles.white }}
            mr={1}
          >
            name:
          </Typography>
          <Typography component="span" sx={styles.gray}>
            '
          </Typography>
          <Typography component="span" sx={styles.amber}>
            {project.name}
          </Typography>
          <Typography component="span" sx={styles.gray}>
            ',
          </Typography>
        </Box>

        {/* tools */}
        <Box sx={styles.lineIndent}>
          <Typography component="span" sx={styles.white}>
            tools:
          </Typography>
          <Typography component="span" sx={styles.gray}>
            {" ['"}
          </Typography>
          {project.tools.map((tool, i) => (
            <React.Fragment key={i}>
              <Typography component="span" sx={styles.amber}>
                {tool}
              </Typography>
              {i !== project.tools.length - 1 && (
                <Typography component="span" sx={styles.gray}>
                  {`', '`}
                </Typography>
              )}
            </React.Fragment>
          ))}
          <Typography component="span" sx={styles.gray}>
            {"],"}
          </Typography>
        </Box>

        {/* myRole */}
        <Box>
          <Typography
            component="span"
            sx={{ ...styles.lineIndent, ...styles.white }}
            mr={1}
          >
            myRole:
          </Typography>
          <Typography component="span" sx={styles.orange}>
            {project.role}
          </Typography>
          <Typography component="span" sx={styles.gray}>
            ,
          </Typography>
        </Box>

        {/* description */}
        <Box sx={styles.lineIndent}>
          <Typography component="span" sx={styles.white}>
            Description:
          </Typography>
          <Typography component="span" sx={styles.cyan}>
            {" " + project.description}
          </Typography>
          <Typography component="span" sx={styles.gray}>
            ,
          </Typography>
        </Box>

        <Box>
          <Typography component="span" sx={styles.gray}>
            {"};"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
