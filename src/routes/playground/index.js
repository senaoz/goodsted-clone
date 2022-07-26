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
import Typo from "./components/Typo";

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
        className="playground"
      >
        <Typography variant="h3">Playground</Typography>

        <p>This is a playground for testing and developing the application.</p>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "2em",
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

        <Typo />
      </Container>
    </ThemeProvider>
  );
}
