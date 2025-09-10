import { Box, Button, Typography } from "@mui/material";
import { helloText, styles } from "./styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

const accounts = [
  { link: "", icon: <BsGithub size={30} /> },
  { link: "", icon: <BsLinkedin size={30} /> },
  { link: "", icon: <SiLeetcode size={30} /> },
  { link: "", icon: <FaTwitterSquare size={30} /> },
];

const skills = [
  "Html",
  "CSS",
  "Javascript",
  "Typescript",
  "React JS",
  "React-redux-toolkit",
  "Material UI",
];
const qualities = [
  "hardWorker:",
  "quickLearner:",
  "problemSolver:",
  "teamPlayer:",
];
const FirstSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        mt: "4%",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Typography sx={helloText()}>Hello,</Typography>
        <Typography component={"span"} sx={helloText()}>
          This is
        </Typography>
        <Typography component={"span"} sx={helloText("secondary")}>
          {" B Ramesh"}
        </Typography>
        <Typography component={"span"} sx={helloText()}>
          {". I'm a Professional "}
        </Typography>
        <Typography component={"span"} sx={helloText("primary")}>
          Software Developer
        </Typography>
        <Typography component={"span"} sx={helloText("primary")}>
          .
        </Typography>
        <Box sx={{ display: "flex", gap: 3, my: "5%" }}>
          {accounts.map((account) => (
            <Typography component={"a"} sx={styles.anchoreLink}>
              {account.icon}
            </Typography>
          ))}
        </Box>
        <Box sx={{ mt: "5%", gap: 2, display: "flex" }}>
          <Typography
            component={"a"}
            href="#contact"
            sx={{
              display: "inline-block",
              borderRadius: "9999px",
              backgroundImage: "linear-gradient(to right, #7c3aed, #ec4899)",
              padding: "1px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundImage: "linear-gradient(to right, #ec4899, #7c3aed)",
              },
            }}
          >
            <Button
              sx={{
                px: { xs: 1.5, md: 4 },
                py: { xs: 1, md: 1.5 },
                borderRadius: "9999px",
                backgroundColor: "#0d1224",
                color: "#fff",
                fontSize: { xs: "0.75rem", md: "0.875rem" },
                fontWeight: { xs: 500, md: 600 },
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "flex",
                alignItems: "center",
                gap: 0.25,
                transition: "all 0.2s ease-out",
                "&:hover": {
                  gap: "0.75rem",
                  backgroundColor: "#0d1224", // keep bg same
                },
              }}
            >
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </Button>
          </Typography>
          <Typography
            target="_blank"
            component={"a"}
            role="button"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25rem",
              px: { xs: 1.5, md: 4 },
              py: { xs: 1, md: 1.5 },
              borderRadius: "9999px",
              backgroundImage: "linear-gradient(to right, #ec4899, #7c3aed)",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              fontWeight: { xs: 500, md: 600 },
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#fff",
              transition: "all 0.2s ease-out",
              "&:hover": {
                gap: "0.75rem",
                backgroundImage: "linear-gradient(to right, #7c3aed, #ec4899)",
                textDecoration: "none",
                color: "#fff",
              },
            }}
          >
            <Box component="span">Get Resume</Box>
            <MdDownload size={16} />
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          position: "relative",
          borderRadius: "12px",
          border: "1px solid #1b2c68a0",
          background: "linear-gradient(to right, #0d1224, #0a0d37)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "1px",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            background:
              "linear-gradient(to right, transparent, #ec4899, #7c3aed, transparent)",
          },
        }}
      >
        <Box sx={{ px: { xs: 2, lg: 4 }, py: 2 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "error.light",
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "orange",
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "success.light",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: "2px solid #312e81",
            px: { xs: 2, lg: 4 },
            py: { xs: 2, lg: 4 },
            fontFamily: "monospace",
            fontSize: { xs: "0.75rem", md: "0.875rem", lg: "1rem" },
            color: "white",
          }}
        >
          <Typography component="div">
            <Box component="span" sx={{ color: "#ec4899", mr: 1 }}>
              const
            </Box>
            <Box component="span" sx={{ color: "white", mr: 1 }}>
              coder
            </Box>
            <Box component="span" sx={{ color: "#ec4899", mr: 1 }}>
              =
            </Box>
            <Box component="span" sx={{ color: "gray" }}>
              {"{"}
            </Box>
          </Typography>

          {/* name */}
          <Typography component="div" sx={{ ml: { xs: 2, lg: 4 } }}>
            <Box component="span" sx={{ color: "white", mr: 1 }}>
              name:
            </Box>
            <Box component="span" sx={{ color: "gray" }}>
              '
            </Box>
            <Box component="span" sx={{ color: "#fcd34d" }}>
              B Ramesh
            </Box>
            <Box component="span" sx={{ color: "gray" }}>
              ',
            </Box>
          </Typography>

          {/* skills */}
          <Typography component="div" sx={{ ml: { xs: 2, lg: 4 } }}>
            <Box component="span" sx={{ color: "white", mr: 1 }}>
              skills:
            </Box>
            <Box component="span" sx={{ color: "gray" }}>
              ['
            </Box>
            {skills.map((skill, index) => (
              <>
                <Box component="span" sx={{ color: "#fcd34d" }}>
                  {skill}
                </Box>
                {index !== skills.length - 1 && (
                  <Box component="span" sx={{ color: "gray" }}>
                    {"', "}
                  </Box>
                )}
              </>
            ))}

            <Box component="span" sx={{ color: "gray" }}>
              {" ],"}
            </Box>
          </Typography>
          {qualities.map((quality) => (
            <Typography component="div" sx={{ ml: { xs: 2, lg: 4 } }}>
              <Box component="span" sx={{ color: "white", mr: 1 }}>
                {quality}
              </Box>
              <Box component="span" sx={{ color: "orange" }}>
                true
              </Box>
              ,
            </Typography>
          ))}

          {/* hireable */}
          <Typography component="div" sx={{ ml: { xs: 2, lg: 4 } }}>
            <Box component="span" sx={{ color: "green" }}>
              hireable:
            </Box>{" "}
            <Box component="span" sx={{ color: "orange" }}>
              function
            </Box>{" "}
            <Box component="span" sx={{ color: "gray" }}>
              {"() {"}
            </Box>
          </Typography>
          <Typography component="div" sx={{ ml: { xs: 4, lg: 8 } }}>
            <Box component="span" sx={{ color: "orange", mr: 1 }}>
              return
            </Box>
            <Box component="span" sx={{ color: "gray" }}>
              {"("}
            </Box>
          </Typography>
          <Typography component="div" sx={{ ml: { xs: 6, lg: 12 } }}>
            <Box component="span" sx={{ color: "cyan" }}>
              this.
            </Box>
            <Box component="span" sx={{ color: "white", mr: 1 }}>
              hardWorker
            </Box>
            <Box component="span" sx={{ color: "#fcd34d" }}>
              &&
            </Box>
          </Typography>
          <Typography component="div" sx={{ ml: { xs: 6, lg: 12 } }}>
            <Box component="span" sx={{ color: "cyan" }}>
              this.
            </Box>
            <Box component="span" sx={{ color: "white", mr: 1 }}>
              problemSolver
            </Box>
            <Box component="span" sx={{ color: "#fcd34d" }}>
              &&
            </Box>
          </Typography>
          <Typography component="div" sx={{ ml: { xs: 6, lg: 12 } }}>
            <Box component="span" sx={{ color: "cyan" }}>
              this.
            </Box>
            <Box component="span" sx={{ color: "white", mr: 1 }}>
              skills.length
            </Box>
            <Box component="span" sx={{ color: "#fcd34d", mr: 1 }}>
              &gt;=
            </Box>
            <Box component="span" sx={{ color: "orange" }}>
              5
            </Box>
          </Typography>
          <Typography
            component="div"
            sx={{ ml: { xs: 4, lg: 8 }, color: "gray" }}
          >
            {");"}
          </Typography>
          <Typography
            component="div"
            sx={{ ml: { xs: 2, lg: 4 }, color: "gray" }}
          >
            {"};"}
          </Typography>
          <Typography component="div" sx={{ color: "gray" }}>
            {"};"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
