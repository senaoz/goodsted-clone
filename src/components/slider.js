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

  function onClickNext() {
    setCurrentSlide((currentSlide + 1) % slideContents.length);
    console.log(currentSlide);
  }

  function onClickPrev() {
    setCurrentSlide(
      (currentSlide + slideContents.length - 1) % slideContents.length
    );
    console.log(currentSlide);
  }

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
        marginRight="48px"
      >
        <Typography
          variant="h3"
          sx={{
            marginTop: "32px",
            transition:
              "opacity 329ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 219ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
          }}
        >
          {slideContents[currentSlide].title}
        </Typography>
        <Typography marginTop="28px" variant="body2">
          {slideContents[currentSlide].body}
        </Typography>
        <Grid item display="flex" paddingTop="100px">
          <Button style={{ marginRight: "24px" }} onClick={() => onClickPrev()}>
            <Arrow transform={180} />
          </Button>
          <Button onClick={() => onClickNext()}>
            <Arrow />
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ maxWidth: "66.66666%", position: "relative" }}>
        <img
          src="https://www.goodsted.com/_next/static/media/iphone-empty.f9fb9077.png"
          alt="iphone"
          style={{ position: "absolute", height: "100%", zIndex: 1 }}
        />
        <img
          width="250px"
          src={slideContents[currentSlide].img}
          alt={slideContents[currentSlide].title}
          style={{
            marginLeft: "15px",
          }}
          className="active"
        />

        {slideContents.map((slide, index) => {
          if (index !== currentSlide) {
            return (
              <img
                width="250px"
                src={slide.img}
                alt={slide.title}
                style={{
                  border: "5px solid #fff",
                  borderRadius: "20px",
                }}
                key={index}
                className={
                  index === (currentSlide + 3) % 4 ? "inactive" : "half-active"
                }
              />
            );
          }
        })}
      </Box>
    </Container>
  );
}
