import * as React from "react";
import Button from "@mui/material/Button";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import GoodstedLogo from "../icons/goodsted-logo";
import ArrowIcon from "../icons/down-arrow";

export default function MenuBar() {
  const headersData = [
    {
      label: "Solutions",
      href: "#",
      icon: true,
    },
    {
      label: "Resources",
      href: "#",
      icon: true,
    },
    {
      label: "About",
      href: "#",
      icon: true,
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
                  <Typography key={header.label} variant="h6">
                    {header.label}
                  </Typography>
                );
              } else {
                return (
                  <Typography key={header.label} variant="h6">
                    {header.label}
                    <ArrowIcon />
                  </Typography>
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
