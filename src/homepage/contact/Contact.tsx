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
import { MdAlternateEmail, MdCall } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaStackOverflow } from "react-icons/fa6";
import { TbMailForward } from "react-icons/tb";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { styles } from "./stylesx";
import { links } from "../../utils/utils";

interface PersonalData {
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedIn: string;
  stackOverflow: string;
}

interface Labels {
  name: string;
  email: string;
  message: string;
  sendButton: string;
}

interface ErrorTexts {
  invalidEmail: string;
  required: string;
}

interface UserInput {
  name: string;
  email: string;
  message: string;
}

interface ErrorState {
  email: boolean;
  required: boolean;
}

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const personalData = t("contact.personalData", {
    returnObjects: true,
  }) as PersonalData;

  const labels = t("contact.labels", {
    returnObjects: true,
  }) as Labels;

  const errorsText = t("contact.errors", {
    returnObjects: true,
  }) as ErrorTexts;

  const [userInput, setUserInput] = useState<UserInput>({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<ErrorState>({
    email: false,
    required: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const checkRequired = () => {
    if (userInput.name && userInput.email && userInput.message) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.name || !userInput.email || !userInput.message) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    } else if (error.email) return;

    try {
      setIsLoading(true);
      await axios.post(`/api/contact`, userInput);
      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={styles.container} id="contact">
      <Typography variant="h4" sx={styles.heading}>
        {t("contact.title")}
      </Typography>

      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={styles.paper}>
            <Typography variant="h6" sx={styles.subHeading}>
              {t("contact.subHeading")}
            </Typography>
            <Typography variant="body2" sx={styles.subText}>
              {t("contact.subText")}
            </Typography>
            <form onSubmit={handleSendMail}>
              <TextField
                label={labels.name}
                fullWidth
                required
                variant="outlined"
                value={userInput.name}
                onChange={(e) =>
                  setUserInput({ ...userInput, name: e.target.value })
                }
                onBlur={checkRequired}
                sx={styles.inputField}
              />
              <TextField
                label={labels.email}
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
                  setError((prev) => ({
                    ...prev,
                    email: !isValidEmail(userInput.email),
                  }));
                }}
                sx={styles.inputField}
              />
              {error.email && (
                <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                  {errorsText.invalidEmail}
                </Typography>
              )}
              <TextField
                label={labels.message}
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
                sx={styles.inputField}
              />
              {error.required && (
                <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                  {errorsText.required}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
                sx={styles.submitButton}
              >
                {isLoading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  <>
                    {labels.sendButton}{" "}
                    <TbMailForward style={{ marginLeft: 8 }} />
                  </>
                )}
              </Button>
            </form>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={styles.infoContainer}>
            <Box sx={styles.infoRow}>
              <IconButton sx={styles.iconButton}>
                <MdAlternateEmail size={24} />
              </IconButton>
              <Typography variant="body1">{personalData.email}</Typography>
            </Box>
            <Box sx={styles.infoRow}>
              <IconButton sx={styles.iconButton}>
                <MdCall size={24} />
              </IconButton>
              <Typography variant="body1">{personalData.phone}</Typography>
            </Box>
            <Box sx={styles.infoRow}>
              <IconButton sx={styles.iconButton}>
                <CiLocationOn size={24} />
              </IconButton>
              <Typography variant="body1">{personalData.address}</Typography>
            </Box>
            <Box sx={styles.socialLinks}>
              {[
                { icon: <IoLogoGithub />, link: links.github },
                { icon: <BiLogoLinkedin />, link: links.linkedIn },
                { icon: <FaStackOverflow />, link: links.stackOverflow },
              ].map((item, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ ...styles.iconButton, p: 1.5 }}
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
