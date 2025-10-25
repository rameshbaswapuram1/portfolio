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
    <Box
      component={"header"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "var(--primary-color)",
          fontSize: "clamp(1.375rem, 0.75rem + 2vw, 1.875rem)",
          fontWeight: 700,
        }}
      >
        B Ramesh
      </Typography>
      <Box
        component={"nav"}
        sx={{
          width: "50%",
          display: { xs: "none", sm: "flex" },
          justifyContent: "end",
        }}
      >
        {navs.map((nav) => (
          <Typography
            sx={{
              fontSize: "14px",
              ml: "4%",
              cursor: "pointer",
              "&.MuiTypography-root:hover": {
                color: "var(--secondary-color)",
              },
            }}
            // component={"a"}
          >
            {nav.navItem}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
