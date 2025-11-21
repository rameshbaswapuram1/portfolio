export const styles = {
  container: {
    pt: { xs: "90px", md: "130px" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    position: "relative",
    borderTop: "1px solid #25213b",
    borderBottom: "1px solid #25213b",
  },
  titleWrapper: {
    position: "absolute",
    left: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "translate(-50%, -50%)",
    top: "50px",
  },
  titleText: {
    fontWeight: 400,
    bgcolor: "#1a1443",
    fontSize: "18px",
    px: 2,
    py: 1.1,
    borderRadius: 2,
  },
  titleUnderline: {
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
  cardWrapper: {
    px: 3,
    py: 1,
    position: "relative",
  },
  cardBgImage: {
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
  contentStack: {
    direction: "row",
    alignItems: "center",
    spacing: 3,
    px: 3,
    py: 3,
  },
  iconBox: {
    color: "#8b5cf6",
    transition: "all 0.3s ease",
    "&:hover": { transform: "scale(1.25)" },
  },
  title: {
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

export default styles;
