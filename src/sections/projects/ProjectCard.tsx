// @flow strict
import * as React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const blink = keyframes`
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
`;

function ProjectCard({ project }: any) {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        borderRadius: "12px",
        border: "1px solid #1b2c68a0",
        background: "linear-gradient(to right, #0d1224, #0a0d37)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1px",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          background:
            "linear-gradient(to right, transparent, #ec4899, #7c3aed, transparent)",
        },
      }}
    >
      {/* Top gradient lines */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            height: 1,
            flex: 1,
            background:
              "linear-gradient(to right, transparent, #ec4899, #7c3aed)", // via-pink-500 to-violet-600
          }}
        />
        <Box
          sx={{
            height: 1,
            flex: 1,
            background: "linear-gradient(to right, #7c3aed, transparent)", // violet-600 → transparent
          }}
        />
      </Box>

      {/* Header */}
      <Box
        sx={{
          px: { xs: 2, lg: 4 },
          py: { xs: 1.5, lg: 2.5 },
          position: "relative",
        }}
      >
        {/* macOS traffic lights */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: 0.25, lg: 0.5 }, // space-x-1 lg:space-x-2 (in 8px units → 2px / 4px)
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            pl: 2, // aligns with `px-4`
          }}
        >
          <Box
            sx={{
              width: { xs: 8, lg: 12 },
              height: { xs: 8, lg: 12 },
              borderRadius: "50%",
              backgroundColor: "#f87171", // red-400
            }}
          />
          <Box
            sx={{
              width: { xs: 8, lg: 12 },
              height: { xs: 8, lg: 12 },
              borderRadius: "50%",
              backgroundColor: "#fb923c", // orange-400
            }}
          />
          <Box
            sx={{
              width: { xs: 8, lg: 12 },
              height: { xs: 8, lg: 12 },
              borderRadius: "50%",
              backgroundColor: "#bbf7d0", // green-200
            }}
          />
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            ml: 1.5, // ml-3 (12px)
            color: "#16f2b3",
            fontSize: { xs: "1rem", lg: "1.25rem" }, // text-base lg:text-xl
            fontWeight: 400,
          }}
        >
          {project.name}
        </Typography>
      </Box>

      {/* Code block */}
      <Box
        component="code"
        sx={{
          display: "block",
          borderTop: "2px solid #312e81", // border-indigo-900
          px: { xs: 2, lg: 4 }, // px-4 lg:px-8
          py: { xs: 2, lg: 4 }, // py-4 lg:py-8
          overflow: "hidden",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
          fontSize: { xs: "0.75rem", md: "0.875rem", lg: "1rem" }, // text-xs md:text-sm lg:text-base
          lineHeight: 1.7,
          whiteSpace: "pre-wrap",
        }}
      >
        {/* First line with blinking caret */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            position: "relative",
            pr: 1,
            "&::after": {
              content: '""',
              display: "inline-block",
              width: "8px",
              height: "1.1em",
              ml: 0.5,
              backgroundColor: "#9ca3af", // gray-400 caret
              animation: `${blink} 1s steps(1, end) infinite`,
              verticalAlign: "text-bottom",
            },
          }}
        >
          <Typography
            component="span"
            sx={{ mr: 1, color: "#ec4899" /* pink-500 */ }}
          >
            const
          </Typography>
          <Typography component="span" sx={{ mr: 1, color: "#ffffff" }}>
            project
          </Typography>
          <Typography
            component="span"
            sx={{ mr: 1, color: "#ec4899" /* pink-500 */ }}
          >
            =
          </Typography>
          <Typography component="span" sx={{ color: "#9ca3af" /* gray-400 */ }}>
            {"{"}
          </Typography>
        </Box>

        <Box>
          <Typography
            component="span"
            sx={{ ml: { xs: 2, lg: 4 }, mr: 1, color: "#ffffff" }}
          >
            name:
          </Typography>
          <Typography component="span" sx={{ color: "#9ca3af" }}>
            '
          </Typography>
          <Typography
            component="span"
            sx={{ color: "#fcd34d" /* amber-300 */ }}
          >
            {project.name}
          </Typography>
          <Typography component="span" sx={{ color: "#9ca3af" }}>
            ',
          </Typography>
        </Box>

        <Box sx={{ ml: { xs: 2, lg: 4 } }}>
          <Typography component="span" sx={{ color: "#ffffff" }}>
            tools:
          </Typography>
          <Typography component="span" sx={{ color: "#9ca3af" }}>
            {" ['"}
          </Typography>
          {project.tools.map((tag: any, i: any) => (
            <React.Fragment key={i}>
              <Typography
                component="span"
                sx={{ color: "#fcd34d" /* amber-300 */ }}
              >
                {tag}
              </Typography>
              {project.tools?.length - 1 !== i && (
                <Typography component="span" sx={{ color: "#9ca3af" }}>
                  {`', '`}
                </Typography>
              )}
            </React.Fragment>
          ))}
          <Typography component="span" sx={{ color: "#9ca3af" }}>
            {"],"}
          </Typography>
        </Box>

        <Box>
          <Typography
            component="span"
            sx={{ ml: { xs: 2, lg: 4 }, mr: 1, color: "#ffffff" }}
          >
            myRole:
          </Typography>
          <Typography
            component="span"
            sx={{ color: "#fb923c" /* orange-400 */ }}
          >
            {project.role}
          </Typography>
          <Typography component="span" sx={{ color: "#9ca3af" }}>
            ,
          </Typography>
        </Box>

        <Box sx={{ ml: { xs: 2, lg: 4 }, mr: 1 }}>
          <Typography component="span" sx={{ color: "#ffffff" }}>
            Description:
          </Typography>
          <Typography component="span" sx={{ color: "#22d3ee" /* cyan-400 */ }}>
            {" " + project.description}
          </Typography>
          <Typography component="span" sx={{ color: "#9ca3af" }}>
            ,
          </Typography>
        </Box>

        <Box>
          <Typography component="span" sx={{ color: "#9ca3af" }}>
            {"};"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;
