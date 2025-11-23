import { Box } from "@mui/material";
import { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { MdWorkOutline, MdOutlineContactMail } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { AiOutlineProject } from "react-icons/ai";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import LanguageChange from "./LanguageChange";
import { useTranslation } from "react-i18next";

const navs = [
  { navItem: "ABOUT", href: "#about", icon: <BiInfoCircle /> },
  { navItem: "EXPERIENCE", href: "#experience", icon: <MdWorkOutline /> },
  { navItem: "SKILLS", href: "#skills", icon: <GiSkills /> },
  { navItem: "EDUCATION", href: "#education", icon: <PiStudentFill /> },
  { navItem: "PROJECTS", href: "#projects", icon: <AiOutlineProject /> },
  { navItem: "CONTACT", href: "#contact", icon: <MdOutlineContactMail /> },
];

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
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
              component="a"
              onClick={handleOnCose}
              sx={styles.listItem}
            >
              <ListItemButton>
                <ListItemIcon>
                  {React.cloneElement(nav.icon, { size: 20 })}
                </ListItemIcon>
                <ListItemText primary={t(`nav.${nav.navItem.toLowerCase()}`)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={styles.mobileBox}>
        <LanguageChange />
        <Box onClick={() => setOpen(!open)} sx={styles.amberButton(open)}>
          <span /> <span /> <span />
        </Box>
      </Box>
    </>
  );
}

export default MobileMenu;

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
  mobileBox: {
    display: { xs: "flex", md: "none" },
    alignItems: "center",
    gap: 2,
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
      transform: "scaleX(0.8)",
    },
    "& span:nth-of-type(3)": {
      bottom: 0,
      transform: open ? "translateY(-11px) rotate(-45deg)" : "none",
    },
  }),
};
