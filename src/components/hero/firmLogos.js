import { Container, Box } from "@mui/material";

export default function FirmLogos() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxSizing: "border-box",
        paddingY: "48px",
        justifyContent: "center",
      }}
    >
      <Box className="firmLogoBox">
        <img
          src="https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1646841119%2Faster-44_ncqevu.png&w=640&q=75"
          alt="logo1"
          className="firmLogoImage"
        />
      </Box>
      <Box className="firmLogoBox">
        <img
          src="https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1646828499%2FAssets%2Fjcd3x.png&w=640&q=75"
          alt="logo2"
          className="firmLogoImage"
        />
      </Box>
      <Box className="firmLogoBox">
        <img
          src="https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1646828499%2FAssets%2Funleashed3x.png&w=640&q=75"
          alt="logo3"
          className="firmLogoImage"
          style={{ maxWidth: "40%" }}
        />
      </Box>
      <Box className="firmLogoBox">
        <img
          src="https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1646828499%2FAssets%2Fmanchester3x.png&w=640&q=75"
          alt="logo4"
          className="firmLogoImage"
        />
      </Box>
      <Box className="firmLogoBox">
        <img
          src="https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1646828499%2FAssets%2Fsurrey3x.png&w=640&q=75"
          alt="logo5"
          className="firmLogoImage"
          style={{ maxWidth: "60%" }}
        />
      </Box>
    </Container>
  );
}
