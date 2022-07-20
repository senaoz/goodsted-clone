import { Box, Typography, Stack, Button } from "@mui/material";
import TestimonialIcon from "../../icons/testimonial";
import { useState } from "react";

import NextPrevIcon from "../../icons/prevIcon";

const testimonials = [
  {
    body: "Working with tech for good start-ups brought a whole new angle to the way we traditionally do our Prophet for Non-Profit day",
    name: "Stephanie Morrongiello",
    title: "Ex-Senior Designer at Prophet",
    img: "https://res.cloudinary.com/goodsted/image/upload/v1635421316/Image_2_j7dnah.png",
  },
  {
    body: "It’s a rare opportunity to have a direct positive impact that goes beyond just monetary gain by making good for our society and people. ",
    name: "Kate Saksik",
    title: "Engagement Manager at Prophet",
    img: "https://res.cloudinary.com/goodsted/image/upload/v1635421316/Image_5_bholyz.png",
  },
];

export function SliderItem(props) {
  return (
    <Box
      className="testimonials-card"
      display="flex"
      alignItems="center"
      marginX="-40px"
      style={{ width: "83.333333%" }}
    >
      <img src={props.img} className="testimonials-card-image" />
      <Stack sx={{ textAlign: "center", paddingX: "40px" }} alignItems="center">
        <TestimonialIcon />
        <Typography
          variant="h5"
          fontWeight="400"
          fontSize="21px"
          paddingY="8px"
        >
          {props.body}
        </Typography>
        <Typography variant="h5" fontSize="21px">
          {props.name}
        </Typography>
        <Typography variant="body2">{props.title}</Typography>
      </Stack>
    </Box>
  );
}

export default function TestimonialSlider() {
  const [currentIndex, setCurrentTestimonialIndex] = useState(0);

  function onClickNext() {
    setCurrentTestimonialIndex((currentIndex + 1) % testimonials.length);
  }

  function onClickPrev() {
    setCurrentTestimonialIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button onClick={() => onClickPrev()} style={{ borderRadius: "99999px" }}>
        <NextPrevIcon color="#fff" fill="#E76E3C" />
      </Button>
      <SliderItem
        body={testimonials[currentIndex].body}
        name={testimonials[currentIndex].name}
        title={testimonials[currentIndex].title}
        img={testimonials[currentIndex].img}
      />
      <Button style={{ borderRadius: "99999px" }} onClick={() => onClickNext()}>
        <NextPrevIcon color="#E76E3C" fill="#fff" transform={180} />
      </Button>
    </Box>
  );
}
