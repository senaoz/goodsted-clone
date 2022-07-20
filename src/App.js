import * as React from "react";
import { theme } from "./theme";
import { Container, ThemeProvider } from "@mui/material";
import MenuBar from "./components/menuBar";

import Hero from "./components/hero";
import FirmLogos from "./components/hero/firmLogos";
import Section from "./components/section";
import DiscoverSection from "./components/discoverSection";
import Slider from "./components/slider";
import Plans from "./components/plans";
import Testimonials from "./components/testimonials/testimonials";
import TestimonialNumbers from "./components/testimonials/testimonialNumbers";
import PostsList from "./components/posts";
import ActionSection from "./components/actionSection";
import Footer from "./components/footer";
import FooterLogos from "./components/footer/logos";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuBar />
      <Container maxWidth="xl">
        <Hero />
        <FirmLogos />
      </Container>
      <Section />
      <DiscoverSection />
      <Slider />
      <Plans />
      <div style={{ backgroundColor: "#FEF6F3" }}>
        <Testimonials />
        <TestimonialNumbers />
      </div>
      <PostsList />
      <ActionSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
