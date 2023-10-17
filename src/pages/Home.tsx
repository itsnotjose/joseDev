// Home.js
import { Avatar, Card } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import React from "react";
import Background from "../components/Bg";
const Home = () => {
  return (
    <div className="home-container">
      <Background />
      <Card
        className="card"
        sx={{
          padding: 10,

          border: "2px solid rgba(255, 255, 255, 0.25)",
          borderRadius: "20px",
          backgroundColor: "rgba(55, 55, 55, 0.10)",
          // boxShadow: "13px 13px 100px #100b28",

          color: "#ebedff",
        }}
      >
        <Avatar
          className="avatar"
          style={{ width: 154, height: 154 }}
          src="/assets/memoji.jpeg"
        />
        <h1 className="name">Hey 👋🏽 I'm Jose </h1>
        <h3 className="slogan">Debugging the World, One Line at a Time</h3>
        <div className="button-container">
          <a href="https://github.com/itsnotjose" className="button">
            <GitHubIcon />
          </a>
          <a href="mailto:josearozco15@gmail.com" className="button">
            <CallIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/jose-orozco-404-error/"
            className="button"
          >
            <LinkedInIcon />
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Home;
