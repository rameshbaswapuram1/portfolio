import { Box, Typography } from "@mui/material";
import { BiInfoCircle } from "react-icons/bi";
import { MdWorkOutline, MdOutlineContactMail } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { AiOutlineProject } from "react-icons/ai";
const navs = [
  { navItem: "about", href: "#about", icon: <BiInfoCircle /> },
  { navItem: "experience", href: "#experience", icon: <MdWorkOutline /> },
  { navItem: "skills", href: "#skills", icon: <GiSkills /> },
  { navItem: "education", href: "#education", icon: <PiStudentFill /> },
  { navItem: "projects", href: "#projects", icon: <AiOutlineProject /> },
  { navItem: "contact", href: "#contact", icon: <MdOutlineContactMail /> },
];

import LanguageChange from "./LanguageChange";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Box component="header" id="/" sx={styles.headerContainer}>
      <Typography sx={styles.logoText}>{t("logo")}</Typography>
      <MobileMenu />
      <Box component="nav" sx={styles.navContainer}>
        <LanguageChange />
        {navs.map((nav) => (
          <Typography
            key={nav.navItem}
            href={nav.href}
            component="a"
            sx={styles.navItem}
          >
            {t(`nav.${nav.navItem}`)}
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
    display: { xs: "none", md: "flex" },
    justifyContent: "end",
    alignItems: "center",
  },
  navItem: {
    fontSize: "14px",
    ml: "4%",
    cursor: "pointer",
    transition: "color 0.3s ease",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "var(--secondary-color)",
    },
  },
};
