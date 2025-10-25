export const styles = {
  anchoreLink: {
    color: "var(--secondary-color)",
    transition: "0.5s",
    display: "block",
    height: 30,
    width: 30,
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.2)",
    },
  },
};
export const helloText = (color?: string) => ({
  color: color ? `var(--${color}-color)` : "white",
  fontSize: "clamp(1.875rem, 1.6106rem + 1.0577vw, 2.5625rem);",
  fontWeight: 800,
});
