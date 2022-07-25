import { Container, Typography } from "@mui/material";
import TestimonialSlider from "./slider";
import TestimonialNumbers from "./testimonialNumbers";

export default function Testimonials() {
  return (
    <div style={{ backgroundColor: "#FEF6F3" }}>
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
        <TestimonialNumbers />
      </Container>
    </div>
  );
}
