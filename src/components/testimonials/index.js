import { Box, Container, Typography } from "@mui/material";
import TestimonialSlider from "./slider";

export default function Testimonials() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingX: "48px !important",
          paddingY: "80px",
        }}
      >
        <Typography variant={"h2"} marginBottom="24px">
          Testimonials
        </Typography>
        <Typography
          fontSize="22px"
          lineHeight="30px"
          variant="body2"
          marginBottom="60px"
        >
          Hear what our members, clients and partners say about the benefits.
        </Typography>
        <TestimonialSlider />
      </Container>
    </>
  );
}
