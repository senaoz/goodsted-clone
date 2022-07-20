import { Box, Container, Stack, Typography } from "@mui/material";
import SocialMedia from "./socialMedia";

export default function FooterLogos() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingX: "48px !important",
        display: "flex",
        justifyContent: "center",
        width: "30%",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "40%", height: "40%" }}
        src="https://www.goodsted.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcyber.6fcac37f.png&w=384&q=75"
      />
      <img
        style={{ width: "100%", height: "100%" }}
        src="https://www.goodsted.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseis.fc4019b8.png&w=256&q=75"
      />
      <img
        style={{ width: "40%", marginLeft: "3em" }}
        src="https://www.goodsted.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fresizealum.8f300f27.png&w=640&q=75"
      />
    </Container>
  );
}
