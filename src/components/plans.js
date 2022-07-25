import { Box, Container, Typography } from "@mui/material";

export default function PlansSection() {
  const plans = [
    {
      label: "Impact Challenge",
      img: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332319%2Fenviroment-sustainability-1.png&w=128&q=75",
      body: "Join inspiring & impactful team building activities your people will love.",
      href: "#",
    },
    {
      label: "Employee Purpose",
      img: "https://www.goodsted.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgoodsted%2Fimage%2Fupload%2Fv1606332319%2Fenviroment-sustainability-1.png&w=128&q=75",
      body: "Scale your social impact, with engagement & impact reports at your fingertips. ",
      href: "#",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#1b2c2e",
        color: "#fff",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          paddingX: "48px !important",
          paddingY: "80px",
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Box
            sx={{
              display: "grid",
              columnGap: 3,
              rowGap: 1,
              gridTemplateColumns: "repeat(2, 1fr)",
              marginRight: "48px",
            }}
          >
            {plans.map((plan, index) => (
              <Box
                className="needs-box"
                key={plan.label + index}
                display="flex"
                flexDirection="column"
              >
                <img
                  src={plan.img}
                  alt={plan.label}
                  style={{ maxWidth: "64px" }}
                />
                <Typography
                  color="text.primary"
                  fontSize="24px"
                  marginTop="24px"
                >
                  {plan.label}
                </Typography>
                <Typography
                  color="text.primary"
                  marginTop="16px"
                  fontSize="14px"
                  variant="body2"
                >
                  {plan.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box width="40%">
          <Typography variant="h2">Fit to your needs</Typography>
          <Typography variant="body2" fontSize="20px" marginTop="26px">
            Choose the plan that's right for you - whether you're just starting
            out on your impact journey, or are ready to scale and champion
            change more widely in your community.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
