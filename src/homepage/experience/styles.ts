export const styles = {
  container: {
    pt: { xs: "70px", md: "100px" },
    mt: { xs: "10%", md: "0%" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    position: "relative",
  },
  titleWrapper: {
    position: "absolute",
    left: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    top: "40px",
  },
  titleText: {
    fontWeight: 400,
    bgcolor: "#1a1443",
    fontSize: "18px",
    px: 2,
    py: 1.1,
    borderRadius: 2,
  },
  titleLine: {
    width: 250,
    height: 5,
    bgcolor: "#1a1443",
    position: "absolute",
    zIndex: "-1",
  },
  leftSection: {
    display: "flex",
    justifyContent: "center",
    width: { xs: "100%", md: "50%" },
  },
  rightSection: {
    width: { xs: "100%", md: "50%" },
  },
  glowCardBox: {
    px: 3,
    py: 1,
    position: "relative",
  },
  blurBg: {
    position: "absolute",
    bottom: 0,
    opacity: 0.8,
    width: "100%",
    height: "100%",
  },
  durationBox: {
    display: "flex",
    justifyContent: "center",
  },
  durationText: {
    fontSize: { xs: "0.75rem", sm: "0.875rem" },
    color: "#16f2b3",
  },
  cardStack: {
    direction: "row",
    alignItems: "center",
    spacing: 3,
    px: 3,
    py: 3,
  },
  icon: {
    color: "#8b5cf6",
    transition: "all 0.3s ease",
    "&:hover": { transform: "scale(1.25)" },
  },
  jobTitle: {
    fontSize: { xs: "1rem", sm: "1.25rem" },
    mb: 1,
    textTransform: "uppercase",
    color: "white",
  },
  company: {
    fontSize: { xs: "0.875rem", sm: "1rem" },
    color: "white",
  },
};
