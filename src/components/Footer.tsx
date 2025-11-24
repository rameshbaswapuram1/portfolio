import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";
import { IoStar } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box component="footer" sx={styles.footerContainer}>
      {scrollY > 350 && (
        <IconButton href="#/" sx={styles.topArrowButton}>
          <FaArrowUp />
        </IconButton>
      )}

      <Box sx={styles.contentWrapper}>
        <Box sx={styles.gradientBorder} />

        <Stack sx={styles.footerContent}>
          <Typography variant="body2" sx={styles.footerText}>
            © {t("footer.portfolioBy")}{" "}
            <Link
              href="https://www.linkedin.com/in/ramesh-baswapuram/"
              target="_blank"
              underline="hover"
              sx={styles.nameLink}
            >
              B Ramesh
            </Link>
          </Typography>

          <Stack direction="row" spacing={3} alignItems="center">
            <Link
              href="https://github.com/rameshbaswapuram1"
              target="_blank"
              underline="none"
              sx={styles.actionLink}
            >
              <IoStar />
              <span>{t("footer.star")}</span>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;

const styles = {
  topArrowButton: {
    "&.MuiIconButton-root": {
      position: "fixed",
      right: "30px",
      backgroundImage: "linear-gradient(to right, #ec4899, #7c3aed)",
      color: "white",
      height: 45,
      width: 45,
      zIndex: 5,
      animation: "updown 1.5s ease-in-out infinite",
      "@keyframes updown": {
        "0%": { bottom: "40px" },
        "50%": { bottom: "30px" },
        "100%": { bottom: "40px" },
      },
    },
  },
  footerContainer: {
    position: "relative",
    bgcolor: "#0d1224",
    color: "white",
    borderTop: "1px solid #353951",
    overflow: "hidden",
  },
  contentWrapper: {
    mx: "auto",
    py: { xs: 3, lg: 5 },
    maxWidth: {
      lg: "70rem",
      xl: "76rem",
      "2xl": "92rem",
    },
    position: "relative",
  },
  gradientBorder: {
    position: "absolute",
    top: 0,
    left: "25%",
    width: "50%",
    height: "1px",
    background: "linear-gradient(to right, transparent, #8b5cf6, transparent)",
  },
  footerContent: {
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    spacing: 2,
  },
  footerText: { textAlign: "center" },
  nameLink: { color: "#16f2b3", fontWeight: 500 },
  actionLink: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    textTransform: "uppercase",
    color: "white",
    transition: "color 0.3s",
    "&:hover": { color: "#16f2b3" },
  },
};
