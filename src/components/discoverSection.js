import { Box, Container, Typography } from "@mui/material";
import EndArrow from "../icons/endArrow";

export default function DiscoverSection() {
  const causes = [
    {
      label: "Environment & Sustainability",
      img: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332319%2Fenviroment-sustainability-1.png&w=128&q=75",
      href: "#",
    },
    {
      label: "Equality & Inclusion",
      img: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332020%2Fequality-inclusion-1.png&w=128&q=75",
      href: "#",
    },
    {
      label: "Health & Wellbeing",
      img: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332138%2Fhealth-wellbeing-1.png&w=128&q=75",
      href: "#",
    },
    {
      label: "Children & Youth",
      img: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606331933%2Fchildren-youth-1.png&w=128&q=75",
      href: "#",
    },
    {
      label: "Arts & Culture",
      img: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332384%2Farts-culture-1.png&w=128&q=75",
      href: "#",
    },
    {
      label: "Black Lives Matter",
      img: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332432%2Fblack-lives-matter-1.png&w=128&q=75",
      href: "#",
    },
    {
      label: "Animal Welfare",
      img: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606331597%2Fanimal-welfare-1.png&w=128&q=75",
      href: "#",
    },
    {
      label: " Clean water & Sanitation",
      img: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332424%2Fclean-water-sanitation-1.png&w=128&q=75",
      href: "#",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#F3F3F3",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "flex-start",
          paddingX: "48px !important",
          paddingY: "80px",
        }}
      >
        <Typography variant="h2" sx={{ maxWidth: "41%" }}>
          Discover causes you care about
        </Typography>

        <Box sx={{ maxWidth: "58.333333%" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {causes.map((cause, index) => (
              <Box className="card" key={cause.label + index}>
                <img src={cause.img} alt={cause.label} />
                <p className="card-body">{cause.label}</p>
              </Box>
            ))}
          </Box>

          <Typography sx={{ margin: "16px 0  0 16px" }}>
            Show more <EndArrow />
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
