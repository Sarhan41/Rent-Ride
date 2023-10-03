import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EvStationIcon from "@mui/icons-material/EvStation";
import SpeedIcon from "@mui/icons-material/Speed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const CarCard = ({ name, People, type, type2, km, Price, Image, year }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "calc(90% - 16px)",
        margin: "8px",
        ml: 4,
        display: "flex",
        flexDirection: "column",
        borderRadius: 5,
      }}
    >
      <CardMedia
        component="img"
        image={Image}
        alt={name}
        sx={{
          border: "1px solid #ccc", // Add a light gray border to the image
          borderRadius: "5px", // Add a slight border radius to match the card
          margin: "10px", // Add some margin around the image
          width: "auto",
        }}
      />
      <CardContent>
        <Stack gap={1}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="div" color="#333333">
              {name}
            </Typography>

            <Typography
              variant="outlined"
              component="div"
              style={{
                border: "1px solid lightblue",
                color: "#333333",
                borderRadius: 8,
                padding: "4px 8px",
                pointerEvents: "none",
                display: "inline-block",
              }}
            >
              {year}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <span
              style={{
                display: "flex",
                gap: 3,
                color: "#777",
                fontSize: "0.9rem",
              }}
            >
              <PeopleAltIcon
                fontSize="small"
                style={{
                  color: "lightblue",
                  borderRadius: "50%",
                  verticalAlign: "middle",
                }}
              />
              <Typography style={{ verticalAlign: "middle" }}>
                {People} People
              </Typography>
            </span>
            <span
              style={{
                display: "flex",
                gap: 3,
                color: "#777",
                fontSize: "0.9rem",
                marginLeft: 45,
              }}
            >
              <EvStationIcon
                fontSize="small"
                style={{
                  color: "lightblue",
                  borderRadius: "50%",
                  verticalAlign: "middle",
                }}
              />
              <Typography style={{ verticalAlign: "middle" }}>
                {type}
              </Typography>
            </span>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <span
              style={{
                display: "flex",
                gap: 3,
                color: "#777",
                fontSize: "0.9rem",
              }}
            >
              <SpeedIcon
                fontSize="small"
                style={{
                  color: "lightblue",
                  borderRadius: "50%",
                  verticalAlign: "middle",
                }}
              />
              <Typography style={{ verticalAlign: "middle" }}>{km}</Typography>
            </span>
            <span
              style={{
                display: "flex",
                gap: 3,
                color: "#777",
                fontSize: "0.9rem",
                marginLeft: 17,
              }}
            >
              <SupportAgentIcon
                fontSize="small"
                style={{
                  color: "lightblue",
                  borderRadius: "50%",
                  verticalAlign: "middle",
                }}
              />
              <Typography style={{ verticalAlign: "middle" }}>
                Automatic
              </Typography>
            </span>
          </Stack>
          <Stack
            direction="row"
            alignItems="baseline"
            marginTop={1}
            pl={2}
            sx={{
              borderTop: "1px solid #ccc",
              paddingTop: 2,
            }}
          >
            <Typography variant="h5" component="h1">
              ${Price}
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              color="text.secondary"
              style={{ fontWeight: "medium", marginLeft: "4px" }}
            >
              /month
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 5, borderRadius: 2 }}
            >
              Rent Now
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CarCard;
