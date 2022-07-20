import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PusulaIcon from "../../icons/pusula";
import RegisterIcon from "../../icons/register";
import HandshakeIcon from "../../icons/handshake";
import EndArrow from "../../icons/endArrow";

export default function Hero() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: "48px",
      }}
    >
      <Box sx={{ maxWidth: "41%" }}>
        <Typography variant="h1">Take action for social progress</Typography>
        <Stack spacing={2} marginTop={4}>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              padding: "16px 24px",
              justifyContent: "flex-start",
              border: "1px solid #DAE1DD",
            }}
            startIcon={<PusulaIcon />}
            endIcon={<EndArrow transform={-90} />}
          >
            Discover opportunities to take action
          </Button>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              padding: "16px 24px",
              justifyContent: "flex-start",
              border: "1px solid #DAE1DD",
            }}
            startIcon={<RegisterIcon />}
            endIcon={<EndArrow transform={-90} />}
          >
            Register your nonprofit or startup
          </Button>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              padding: "16px 24px",
              justifyContent: "flex-start",
              border: "1px solid #DAE1DD",
            }}
            startIcon={<HandshakeIcon />}
            endIcon={<EndArrow transform={-90} />}
          >
            Engage your colleagues
          </Button>
        </Stack>
      </Box>

      <img src="https://res.cloudinary.com/goodsted/image/upload/v1646895303/Assets/around-the-world.svg" />
    </Container>
  );
}
