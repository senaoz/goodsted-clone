import {
  Avatar,
  Box,
  Stack,
  CircularProgress,
  Container,
  AvatarGroup,
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { themePlayground } from "./themePlayground";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import SelectOtherProps from "./components/selectBox";
import HorizontalLinearStepper from "./components/stepper";

export default function Playground() {
  const shapeStyles = {
    bgcolor: "primary.main",
    width: 40,
    height: 40,
  };
  const shapeCircleStyles = { borderRadius: "50%" };
  const rectangle = <Box component="span" sx={shapeStyles} />;
  const circle = (
    <Box item component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  );

  return (
    <ThemeProvider theme={themePlayground}>
      <Container
        maxWidth="xl"
        sx={{
          padding: "48px !important",
          alignItems: "start",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">Playground</Typography>

        <p>This is a playground for testing and developing the application.</p>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5">Avatar Group</Typography>

            <AvatarGroup total={24}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </Box>

          <Box>
            <Typography variant="h5">Badges</Typography>

            <Box>
              <Badge
                itcolor="secondary"
                badgeContent=" "
                sx={{ marginRight: "1em" }}
              >
                {rectangle}
              </Badge>
              <Badge
                color="secondary"
                badgeContent=" "
                variant="dot"
                sx={{ marginRight: "1em" }}
              >
                {rectangle}
              </Badge>
              <Badge
                color="secondary"
                overlap="circular"
                badgeContent=" "
                sx={{ marginRight: "1em" }}
              >
                {circle}
              </Badge>
              <Badge
                color="secondary"
                overlap="circular"
                badgeContent=" "
                variant="dot"
                sx={{ marginRight: "1em" }}
              >
                {circle}
              </Badge>
            </Box>
          </Box>
          <Box>
            <Typography variant="h5">Circular Progress</Typography>

            <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
              <CircularProgress color="secondary" />
              <CircularProgress color="warning" />
              <CircularProgress color="primary" />
            </Stack>
          </Box>
        </Box>
        <Typography variant="h5">Horizontal Linear Stepper</Typography>
        <HorizontalLinearStepper />
        <SelectOtherProps />

        <Typography variant="h5">Typography</Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          borderRadius="8px"
          borderColor="text.secondary"
          border="2px solid"
          marginY="0 2em 2em 2em"
          sx={{ width: "100%", padding: "2em" }}
        >
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>

          <Typography variant="subtitle1">
            Subtitle 1: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.{" "}
          </Typography>
          <Typography variant="subtitle2">
            Subtitle 2: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.{" "}
          </Typography>

          <Typography variant="body1">
            Body 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="body2">
            Body 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="button">Button</Typography>
          <Typography variant="caption">Caption</Typography>
          <Typography variant="overline">Overline</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
