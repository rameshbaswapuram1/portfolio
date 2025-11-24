import { Box, Typography } from "@mui/material";
import ProfileImage from "../../assets/images/ProfileImage.jpg";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.aboutContainer} id="about">
      <Box sx={styles.textContainer}>
        <Typography sx={styles.subHeading}>{t("about.subHeading")}</Typography>
        <Typography sx={styles.description}>{t("about.description")}</Typography>
      </Box>

      <Box sx={styles.imageSection}>
        <Box sx={styles.aboutLabelContainer}>
          <Typography sx={styles.aboutLabel}>{t("about.label")}</Typography>
          <Box sx={styles.aboutLabelLine} />
        </Box>

        <Box>
          <Box sx={styles.cardContainer}>
            <Box id="inner" sx={styles.cardInner}>
              <Box id="front" sx={styles.cardFront}>
                <Box component="img" src={ProfileImage} sx={styles.profileImage} />
              </Box>
              <Box id="back" sx={styles.cardBack}>
                <Typography sx={styles.cardText}>{t("about.cardText")}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
