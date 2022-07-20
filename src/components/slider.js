import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { useState } from "react";
import Arrow from "../icons/arrow";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideContents = [
    {
      title: "Sign up & complete your profile",
      body: "Once you sign up, head to your profile to add your profile photo, skills and interests. Use the 'Featured' section to add any documents or images that may be relevant to the skills you'd like to volunteer.",
      img: "https://www.goodsted.com/_next/static/media/screen-signup.d31d671f.png",
    },
    {
      title: "Explore diverse volunteer opportunities",
      body: "Browse the open 'opportunities' to find volunteering opportunities fit to your skills and interests. We will also recommend you opportunities that fit your profile.",
      img: "https://www.goodsted.com/_next/static/media/screen-opp.232f32cd.png",
    },
    {
      title: "Offer support & share updates",
      body: "Offer support to opportunities you'd like to participate in, and post about your work on the feed to engage with the community. Inspire others to take part by spreading the word across other social channels too to grow your audience.",
      img: "https://www.goodsted.com/_next/static/media/screen-offer.0064d3dc.png",
    },
    {
      title: "Exchange feedback & recommendations",
      body: "Once you successfully complete an opportunity, you'll get the chance to share your feedback, both privately with the lead, and publicly, by posting a recommendation on their profile!",
      img: "https://www.goodsted.com/_next/static/media/screen-feedback.123dc22f.png",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingX: "48px !important",
        paddingY: "136px",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        maxWidth="33.33333%"
        marginRight="32px"
      >
        <Typography variant="h2" sx={{ marginTop: "32px" }}>
          {slideContents[currentSlide].title}
        </Typography>
        <Typography marginTop="28px" variant="body2">
          {slideContents[currentSlide].body}
        </Typography>
        <Grid item display="flex" paddingTop="100px">
          <Button style={{ marginRight: "24px" }}>
            <Arrow transform={180} />
          </Button>
          <Button>
            <Arrow />
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ maxWidth: "66.66666%" }}>
        <img
          width="75%"
          src={slideContents[currentSlide].img}
          alt={slideContents[currentSlide].title}
          style={{ border: "2px solid #e6e6e6" }}
        />
      </Box>
    </Container>
  );
}
