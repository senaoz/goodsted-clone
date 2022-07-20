import * as React from "react";
import Button from "@mui/material/Button";

import {
  AppBar,
  Container,
  Stack,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import GoodstedLogo from "../../icons/goodsted-logo";

import MenuPopover from "./popper";

export default function MenuBar() {
  const headersData = [
    {
      label: "Solutions",
      href: "#",
      icon: true,
      children: [
        {
          title: "Impact Challenge",
          body: "Team building for social impact",
          href: "#",
          icon: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332138%2Fhealth-wellbeing-1.png&w=128&q=75",
        },
        {
          title: "Employee Purpose",
          body: "Activate your social purpose",
          href: "#",
          icon: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332138%2Fhealth-wellbeing-1.png&w=128&q=75",
        },
      ],
    },
    {
      label: "Resources",
      href: "#",
      icon: true,
      children: [
        {
          title: "Our Blog",
          body: null,
          href: "#",
          icon: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332138%2Fhealth-wellbeing-1.png&w=128&q=75",
        },
        {
          title: "Members Stories",
          body: null,
          href: "#",
          icon: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332138%2Fhealth-wellbeing-1.png&w=128&q=75",
        },
      ],
    },
    {
      label: "About",
      href: "#",
      icon: true,
      children: [
        {
          title: "Our Story",
          body: null,
          href: "#",
          icon: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332138%2Fhealth-wellbeing-1.png&w=128&q=75",
        },
        {
          title: "Team & Advisors",
          body: null,
          href: "#",
          icon: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332138%2Fhealth-wellbeing-1.png&w=128&q=75",
        },
      ],
    },
    {
      label: "Nonprofits & Startups",
      href: "/listings",
      icon: false,
    },
  ];

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ paddingY: 1, borderBottom: "1px solid", borderColor: "#EFF0F1" }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <GoodstedLogo />
          <Stack direction="row" spacing={7}>
            {headersData.map((header, index) => {
              if (!header.icon) {
                return (
                  <Button>
                    <Typography key={header.label} variant="h6">
                      {header.label}
                    </Typography>
                  </Button>
                );
              } else {
                return (
                  <MenuPopover
                    label={header.label}
                    children={header.children}
                  />
                );
              }
            })}
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ fontSize: "0.85em" }}
              size="large"
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ fontSize: "0.85em" }}
              size="large"
            >
              Join Now
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
