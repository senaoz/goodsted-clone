import { Box, Button, Container, Typography } from "@mui/material";

export default function ActionSection() {
  return (
    <div
      style={{
        backgroundColor: "#1b2c2e",
        color: "#fff",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          paddingX: "48px !important",
          paddingY: "48px",
        }}
      >
        <Box
          sx={{
            width: "25%",
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "32px",
          }}
        >
          <img
            width="224px"
            src="https://www.goodsted.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworld.6ba28aa6.webp&w=3840&q=75"
            alt="earth"
          />
        </Box>
        <Box width="35%">
          <Typography variant="h4" marginBottom="32px">
            Let's collaborate for a better world
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              border: "2px solid #E76E3C",
              padding: "12px 24px",
              minWidth: "64px",
            }}
          >
            Get started for free
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              color: "#fff",
              border: "2px solid #fff",
              padding: "12px 24px",
              marginLeft: "32px",
              width: "170px",
            }}
          >
            Talk to us
          </Button>
        </Box>
      </Container>
    </div>
  );
}
