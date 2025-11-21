import { Box } from "@mui/material";
import React from "react";
import HeroImage from "../assets/svg/hero.svg";
import SectionImage from "../assets/svg/section.svg";

const BackGroundImage = ({
  children,
  isSection,
}: {
  children: React.ReactNode;
  isSection: boolean;
}) => {
  return (
    <Box sx={styles.mainDiv}>
      <Box
        sx={styles.backgroundImage}
        component={"img"}
        src={isSection ? SectionImage : HeroImage}
        alt="Background Image"
      />
      {children}
    </Box>
  );
};

export default BackGroundImage;

const styles = {
  mainDiv: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  backgroundImage: { position: "absolute", top: -0, zIndex: -1, width: "100%" },
};
