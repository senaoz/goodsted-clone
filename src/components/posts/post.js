import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";

export default function PostCard(props) {
  // <PostCard img="" title="" person="" personImg="" date=""/>

  return (
    <Card
      sx={{
        margin: "16px",
        borderRadius: "12px",
        boxShadow: "0px 10px 35px rgb(0 0 0 / 3%)",
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        width="100%"
        image={props.img}
        alt={props.title}
      />
      <CardContent sx={{ padding: "24px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontSize="20px"
          lineHeight="36px"
        >
          {props.title}
        </Typography>

        <Box display="flex" justifyContent="flex-start" marginTop="50px">
          <Avatar
            alt={props.person}
            src={props.personImg}
            sx={{ marginRight: "8px" }}
          />
          <Box width="100%">
            <Typography variant="body1">{props.person}</Typography>
            <Box display="flex" alignItems="center">
              <img
                src="https://www.goodsted.com/_next/static/media/check.03422d64.svg"
                style={{ marginRight: "4px" }}
                alt="check"
                width={16}
                height={16}
              />
              <Typography fontSize="13px" fontStyle="italic" fontWeight="400">
                Verified writer
              </Typography>
              <Typography
                variant="body1"
                sx={{ flexGrow: 1, textAlign: "end" }}
              >
                {props.date}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
