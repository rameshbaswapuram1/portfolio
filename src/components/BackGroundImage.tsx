import { Box } from "@mui/material";
import React from "react";
import HeroImage from "../assets/svgs/hero.svg";
import SectionImage from "../assets/svgs/section.svg";

const BackGroundImage = ({
  children,
  isSection,
}: {
  children: React.ReactNode;
  isSection: boolean;
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ position: "absolute", top: -0, zIndex: -1, width: "100%" }}
        component={"img"}
        src={isSection ? SectionImage : HeroImage}
        alt="Background Image"
      />
      {children}
    </Box>
  );
};

export default BackGroundImage;
