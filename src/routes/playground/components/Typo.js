import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Typo() {
  return (
    <>
      <Typography variant="h5">Typography</Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        borderRadius="8px"
        borderColor="text.secondary"
        border="2px solid"
        marginY="0 2em 2em 2em"
        sx={{
          width: "100%",
          padding: "2em",
          marginBottom: "2em",
          marginTop: "1em",
        }}
      >
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>

        <Typography variant="subtitle1">
          Subtitle 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
        </Typography>
        <Typography variant="subtitle2">
          Subtitle 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
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
    </>
  );
}
