import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  IconButton,
  Paper,
} from "@mui/material";
import { MdAlternateEmail, MdCall as IoMdCall } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter, FaStackOverflow, FaFacebook } from "react-icons/fa6";
import { TbMailForward } from "react-icons/tb";
import axios from "axios";
import { toast } from "react-toastify";

interface PersonalData {
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedIn: string;
  twitter: string;
  stackOverflow: string;
  facebook: string;
}

// ✅ Replace with your real data
const personalData: PersonalData = {
  email: "yourmail@example.com",
  phone: "+91 9876543210",
  address: "Hyderabad, Telangana, India",
  github: "https://github.com/yourprofile",
  linkedIn: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourprofile",
  stackOverflow: "https://stackoverflow.com/users/yourid",
  facebook: "https://facebook.com/yourprofile",
};

// ✅ Email validation helper
const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ContactSection: React.FC = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);

  const checkRequired = () => {
    if (userInput.name && userInput.email && userInput.message) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contact`,
        userInput
      );
      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const iconStyle = {
    backgroundColor: "#8b98a5",
    color: "#10172d",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#16f2b3",
      transform: "scale(1.1)",
    },
  };

  return (
    <Box sx={{ my: 10, color: "white",  }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: 600,
          letterSpacing: 1,
          color: "#16f2b3",
        }}
      >
        CONTACT
      </Typography>

      <Grid container spacing={6} alignItems="center">
        {/* ---------- Contact Form ---------- */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            sx={{
              p: 4,
              backgroundColor: "#10172d",
              border: "1px solid #464c6a",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: "#16f2b3" }}>
              Contact with me
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: "#d3d8e8" }}>
              If you have any questions or concerns, please don't hesitate to
              contact me. I’m open to any work opportunities aligned with my
              skills and interests.
            </Typography>

            <form onSubmit={handleSendMail}>
              <TextField
                label="Your Name"
                fullWidth
                required
                variant="outlined"
                value={userInput.name}
                onChange={(e) =>
                  setUserInput({ ...userInput, name: e.target.value })
                }
                onBlur={checkRequired}
                sx={{
                  mb: 3,
                  input: { color: "white" },
                  label: { color: "#8b98a5" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#353a52" },
                    "&:hover fieldset": { borderColor: "#16f2b3" },
                    "&.Mui-focused fieldset": { borderColor: "#16f2b3" },
                  },
                }}
              />

              <TextField
                label="Your Email"
                fullWidth
                required
                type="email"
                variant="outlined"
                value={userInput.email}
                onChange={(e) =>
                  setUserInput({ ...userInput, email: e.target.value })
                }
                onBlur={() => {
                  checkRequired();
                  setError({
                    ...error,
                    email: !isValidEmail(userInput.email),
                  });
                }}
                sx={{
                  mb: 3,
                  input: { color: "white" },
                  label: { color: "#8b98a5" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#353a52" },
                    "&:hover fieldset": { borderColor: "#16f2b3" },
                    "&.Mui-focused fieldset": { borderColor: "#16f2b3" },
                  },
                }}
              />
              {error.email && (
                <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                  Please provide a valid email!
                </Typography>
              )}

              <TextField
                label="Your Message"
                fullWidth
                required
                multiline
                rows={4}
                variant="outlined"
                value={userInput.message}
                onChange={(e) =>
                  setUserInput({ ...userInput, message: e.target.value })
                }
                onBlur={checkRequired}
                sx={{
                  mb: 3,
                  textarea: { color: "white" },
                  label: { color: "#8b98a5" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#353a52" },
                    "&:hover fieldset": { borderColor: "#16f2b3" },
                    "&.Mui-focused fieldset": { borderColor: "#16f2b3" },
                  },
                }}
              />

              {error.required && (
                <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                  All fields are required!
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
                sx={{
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
                }}
              >
                {isLoading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  <>
                    Send Message <TbMailForward style={{ marginLeft: 8 }} />
                  </>
                )}
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* ---------- Contact Info + Socials ---------- */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Contact Details */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton sx={iconStyle}>
                <MdAlternateEmail size={24} />
              </IconButton>
              <Typography variant="body1">{personalData.email}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton sx={iconStyle}>
                <IoMdCall size={24} />
              </IconButton>
              <Typography variant="body1">{personalData.phone}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton sx={iconStyle}>
                <CiLocationOn size={24} />
              </IconButton>
              <Typography variant="body1">{personalData.address}</Typography>
            </Box>

            {/* Social Links */}
            <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
              {[
                { icon: <IoLogoGithub />, link: personalData.github },
                { icon: <BiLogoLinkedin />, link: personalData.linkedIn },
                { icon: <FaXTwitter />, link: personalData.twitter },
                { icon: <FaStackOverflow />, link: personalData.stackOverflow },
                { icon: <FaFacebook />, link: personalData.facebook },
              ].map((item, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ ...iconStyle, p: 1.5 }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
