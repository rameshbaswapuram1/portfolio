import { Box } from "@mui/material";

const GradientBorder = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.gradientLineWrapper}>
        <Box sx={styles.gradientLineInner}>
          <Box sx={styles.gradientLine} />
        </Box>
      </Box>
    </Box>
  );
};

export default GradientBorder;

const styles = {
  container: {
    height: "1px",
    width: "100%",
    backgroundColor: " #25213b",
    position: "absolute",
    top: "-0px",
  },
  gradientLineWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "-0px",
    width: "100%",
  },
  gradientLineInner: { width: "75%" },
  gradientLine: {
    height: "1.2px",
    width: "100%",
    background: "linear-gradient(to right, transparent, #8b5cf6, transparent)",
  },
};
