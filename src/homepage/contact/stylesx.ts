export const styles = {
  container: { my: 10, color: "white" },
  heading: {
    textAlign: "center",
    mb: 4,
    fontWeight: 600,
    letterSpacing: 1,
    color: "#16f2b3",
  },
  paper: {
    p: 4,
    backgroundColor: "#10172d",
    border: "1px solid #464c6a",
    borderRadius: 2,
  },
  subHeading: { mb: 2, color: "#16f2b3" },
  subText: { mb: 3, color: "#d3d8e8" },
  inputField: {
    mb: 3,
    input: { color: "white" },
    textarea: { color: "white" },
    label: { color: "#8b98a5" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#353a52" },
      "&:hover fieldset": { borderColor: "#16f2b3" },
      "&.Mui-focused fieldset": { borderColor: "#16f2b3" },
    },
  },
  submitButton: {
    mt: 1,
    background: "linear-gradient(to right, #ec4899, #8b5cf6)",
    color: "white",
    borderRadius: "50px",
    py: 1.5,
    fontWeight: 600,
    letterSpacing: 1,
    "&:hover": {
      background: "linear-gradient(to right, #d946ef, #7c3aed)",
    },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  iconButton: {
    backgroundColor: "#8b98a5",
    color: "#10172d",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#16f2b3",
      transform: "scale(1.1)",
    },
  },
  socialLinks: {
    display: "flex",
    gap: 2,
    mt: 3,
    flexWrap: "wrap",
  },
};
