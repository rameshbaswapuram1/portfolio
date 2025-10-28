import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "#0d1224",
        color: "white",
        borderTop: "1px solid #353951",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          mx: "auto",
          px: { xs: 3, sm: 6 },
          py: { xs: 3, lg: 5 },
          maxWidth: {
            lg: "70rem",
            xl: "76rem",
            "2xl": "92rem",
          },
          position: "relative",
        }}
      >
        {/* Gradient top border */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "25%",
            width: "50%",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, #8b5cf6, transparent)",
          }}
        />

        {/* Content */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            © Developer Portfolio by{" "}
            <Link
              href="https://www.linkedin.com/in/abu-said-bd/"
              target="_blank"
              underline="hover"
              sx={{ color: "#16f2b3", fontWeight: 500 }}
            >
              Abu Said
            </Link>
          </Typography>

          <Stack direction="row" spacing={3} alignItems="center">
            <Link
              href="https://github.com/said7388/developer-portfolio"
              target="_blank"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                textTransform: "uppercase",
                color: "white",
                transition: "color 0.3s",
                "&:hover": { color: "#16f2b3" },
              }}
            >
              <IoStar />
              <span>Star</span>
            </Link>

            <Link
              href="https://github.com/said7388/developer-portfolio/fork"
              target="_blank"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                textTransform: "uppercase",
                color: "white",
                transition: "color 0.3s",
                "&:hover": { color: "#16f2b3" },
              }}
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
