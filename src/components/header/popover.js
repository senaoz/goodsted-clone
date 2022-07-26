import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowIcon from "../../icons/down-arrow";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function MenuPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        <Typography variant="h6">
          {props.label} <ArrowIcon />
        </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box padding="20px">
          <Typography variant="h6" paddingY="12px" color="secondary">
            {props.label}
          </Typography>
          <Box display="flex" flexDirection="column">
            {props.children.map((child, index) => {
              return (
                <Link to={child.href} key={child.label + index}>
                  <Box
                    display="flex"
                    alignItems="center"
                    key={child + index}
                    href={child.href}
                  >
                    <img
                      alt={child.label}
                      src={child.icon}
                      width="35px"
                      style={{ padding: "0px 10px " }}
                    />
                    <Box key={index} paddingY="14px">
                      <Typography variant="body1">{child.title}</Typography>
                      <Typography variant="body2" fontSize="13px">
                        {child.body}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Popover>
    </div>
  );
}
