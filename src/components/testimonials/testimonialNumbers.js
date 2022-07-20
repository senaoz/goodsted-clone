import { Box, Container, Typography } from "@mui/material";

export function NumberItem(props) {
  //<NumberItem number="2k+" body="members in the community"/>
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="50%"
    >
      <Typography
        variant="h3"
        color="secondary"
        flexDirection="column"
        alignItems="center"
      >
        {props.number}
      </Typography>
      <Typography
        variant="h5"
        color="#696871"
        fontSize="21px"
        fontWeight="500"
        textAlign="center"
      >
        {props.body}
      </Typography>
    </Box>
  );
}

export default function TestimonialNumbers() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        paddingX: "48px !important",
        paddingY: "80px",
        justifyItems: "center",
      }}
    >
      <NumberItem number="2k+" body="members in the community" />
      <NumberItem number="1k+" body="hours shared" />
      <NumberItem number="200+" body="organisations supported" />
    </Container>
  );
}
