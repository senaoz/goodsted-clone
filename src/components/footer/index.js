import { Container, Stack, Box, Typography } from "@mui/material";
import SocialMedia from "./socialMedia";
import FooterLogos from "./logos";

export default function Footer() {
  const footerMenu = {
    Goodsted: ["About", "Team & Advisors", "Careers", "Contact"],
    Solutions: [
      " Impact Challenge",
      "Employee Purpose",
      "Nonprofits & Startups",
    ],
    Support: [
      "Help Center",
      "FAQ",
      "Terms of Use",
      "Privacy Policy",
      "Contact Us",
      "Security",
    ],
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          paddingX: "48px !important",
          display: "flex",
          justifyContent: "space-between",
          marginY: "60px",
        }}
      >
        <Stack spacing={1} width="25%">
          <Typography variant={"body1"}>Goodsted</Typography>
          {footerMenu.Goodsted.map((title) => (
            <a key={title}>{title}</a>
          ))}
        </Stack>
        <Stack spacing={1} width="25%">
          <Typography variant={"body1"}>Solutions</Typography>
          {footerMenu.Solutions.map((title) => (
            <a key={title}>{title}</a>
          ))}
        </Stack>
        <Stack spacing={1} width="25%">
          <Typography variant={"body1"}>Support</Typography>
          {footerMenu.Support.map((title) => (
            <a key={title}>{title}</a>
          ))}
        </Stack>
        <Stack spacing={1} width="25%">
          <Typography variant={"body1"}>Goodsted Community</Typography>
          <Typography variant={"body2"}>
            Impact Brixton, 17a Electric Ln, <br />
            Brixton, London, SW9 8LA
          </Typography>
          <Box display="flex" justifyContent="space-between" width="40%">
            <SocialMedia />
          </Box>
        </Stack>
      </Container>
      <FooterLogos />
      <Typography variant={"body2"} textAlign="center" marginBottom="3em">
        © Copyright Goodsted, 2022. All Rights Reserved.
      </Typography>
    </>
  );
}
