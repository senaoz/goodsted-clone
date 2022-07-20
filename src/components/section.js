import { Box, Container, Stack, Typography } from "@mui/material";

export default function Section() {
  return (
    <div
      style={{
        backgroundColor: "#fef6f3",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingX: "48px !important",
          paddingY: "80px",
        }}
      >
        <Stack direction="row" spacing={8}>
          <Box>
            <img
              src="https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1635792099%2Fhand-heart-fill_1_1_ha70al.png&w=96&q=75"
              alt="hand-heart"
            />
            <Typography variant="h5" sx={{ marginTop: "32px" }}>
              Get inspired & share skills
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "8px" }}
            >
              See all the great actions being taken in the community, and browse
              unique opportunities fit to your skills & interests.
            </Typography>
          </Box>
          <Box>
            <img
              alt="link"
              src="https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1635792131%2Flinks-fill_3_1_ubp347.png&w=96&q=75"
            />
            <Typography variant="h5" sx={{ marginTop: "32px" }}>
              Establish partnerships
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "8px" }}
            >
              Meet individuals & organisations passionate about similar causes,
              and connect with new long-term partners.
            </Typography>
          </Box>
          <Box>
            <img
              alt="graph"
              src="https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1635792160%2FVector_3_htjqh7.png&w=96&q=75"
            />
            <Typography variant="h5" sx={{ marginTop: "32px" }}>
              Grow your impact
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "8px" }}
            >
              Scale impactful initiatives in the community and deliver on social
              value commitments through collaboration.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
