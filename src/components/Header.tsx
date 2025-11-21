import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { MdWorkOutline, MdOutlineContactMail } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { AiOutlineProject } from "react-icons/ai";
const navs = [
  { navItem: "ABOUT", href: "#about", icon: <BiInfoCircle /> },
  { navItem: "EXPERIENCE", href: "#experience", icon: <MdWorkOutline /> },
  { navItem: "SKILLS", href: "#skills", icon: <GiSkills /> },
  { navItem: "EDUCATION", href: "#education", icon: <PiStudentFill /> },
  { navItem: "PROJECTS", href: "#projects", icon: <AiOutlineProject /> },
  { navItem: "CONTACT", href: "#contact", icon: <MdOutlineContactMail /> },
];

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const handleOnCose = () => setOpen(!open);
  return (
    <>
      <Drawer anchor="right" open={open} onClose={handleOnCose}>
        <List sx={{ backgroundColor: "#2a2e5a", height: "100%" }}>
          {navs.map((nav) => (
            <ListItem
              key={nav.navItem}
              disablePadding
              href={nav.href}
              component={"a"}
              onClick={handleOnCose}
              sx={styles.listItem}
            >
              <ListItemButton>
                <ListItemIcon>
                  {React.cloneElement(nav.icon, { size: 20 })}
                </ListItemIcon>
                <ListItemText primary={nav.navItem} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box onClick={() => setOpen(!open)} sx={styles.amberButton(open)}>
        <span /> <span /> <span />
      </Box>
    </>
  );
}

const Header = () => {
  return (
    <Box component="header" id="/" sx={styles.headerContainer}>
      <Typography sx={styles.logoText}>B Ramesh</Typography>
      <MobileMenu />
      <Box component="nav" sx={styles.navContainer}>
        {navs.map((nav) => (
          <Typography
            href={nav.href}
            component={"a"}
            key={nav.navItem}
            sx={styles.navItem}
          >
            {nav.navItem}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
const styles = {
  listItem: {
    "& .MuiListItemIcon-root": { minWidth: "40px" },
    "& .MuiTypography-root": {
      color: "white",
      fontSize: "14px",
    },
    "& .MuiListItemIcon-root svg": {
      color: "white",
      transition: "color 0.3s",
    },
    "&:hover": {
      "& .MuiTypography-root": {
        color: "tomato",
      },
      "& .MuiListItemIcon-root svg": {
        color: "tomato",
      },
    },
  },
  amberButton: (open: boolean) => ({
    width: 30,
    height: 24,
    cursor: "pointer",
    position: "relative",
    display: { xs: "flex", md: "none" },
    flexDirection: "column",
    justifyContent: "space-between",
    "& span": {
      width: "100%",
      height: "3px",
      backgroundColor: "white",
      borderRadius: "3px",
      transition: "0.4s",
      position: "absolute",
    },
    "& span:nth-of-type(1)": {
      top: 0,
      transform: open ? "translateY(10px) rotate(45deg)" : "none",
    },
    "& span:nth-of-type(2)": {
      top: "10px",
      opacity: open ? 0 : 1,
      transform: "scaleX(0.8)", // slightly shorter (modern feel)
    },
    "& span:nth-of-type(3)": {
      bottom: 0,
      transform: open ? "translateY(-11px) rotate(-45deg)" : "none",
    },
  }),
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
