import { Box, Typography } from "@mui/material";

const navs = [
  { navItem: "ABOUT", href: "" },
  { navItem: "EXPERIENCE", href: "" },
  { navItem: "SKILLS", href: "" },
  { navItem: "EDUCATION", href: "" },
  { navItem: "BLOGS", href: "" },
  { navItem: "PROJECTS", href: "" },
];

const Header = () => {
  return (
    <Box component="header" sx={styles.headerContainer}>
      {/* Logo / Name */}
      <Typography sx={styles.logoText}>B Ramesh</Typography>

      {/* Navigation Menu */}
      <Box component="nav" sx={styles.navContainer}>
        {navs.map((nav) => (
          <Typography key={nav.navItem} sx={styles.navItem}>
            {nav.navItem}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
const styles = {
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60px",
    width: "100%",
  },

  logoText: {
    color: "var(--primary-color)",
    fontSize: "clamp(1.375rem, 0.75rem + 2vw, 1.875rem)",
    fontWeight: 700,
  },

  navContainer: {
    width: "50%",
    display: { xs: "none", sm: "flex" },
    justifyContent: "end",
  },

  navItem: {
    fontSize: "14px",
    ml: "4%",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "var(--secondary-color)",
    },
  },
};
