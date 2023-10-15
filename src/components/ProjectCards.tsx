import React from "react";
import Card from "@mui/material/Card";
import "../styles/ProjectCards.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Avatar, Grid } from "@mui/material";
const ProjectCards = ({ events }) => {
  return (
    <div className="project">
      {events.map((event, index) => (
        <Card
          className="project-card"
          key={index}
          sx={{
            minWidth: 275,
            margin: 2,
            border: "2px solid rgba(255, 255, 255, 0.25)",
            borderRadius: "20px",
            backgroundColor: "rgba(55, 55, 55, 0.10)",
            // boxShadow: "0 0 100px 100px rgba(0, 0, 0, 0.35)",
            color: "#ebedff",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={3} sm={2} sx={{}}>
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  fontSize: 50,
                  backgroundColor: "transparent",
                  paddingLeft: 5,
                }}
              >
                {event.icon}
              </Avatar>
            </Grid>
            <Grid item xs={9} sm={8}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </Grid>
            <Grid
              item
              xs={3}
              sm={2}
              sx={{ textAlign: "right", paddingRight: 5 }}
            >
              <a href={event.github}>
                <GitHubIcon sx={{ fontSize: 40, color: "white" }} />
              </a>
            </Grid>
          </Grid>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCards;
