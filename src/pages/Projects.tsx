import React from "react";
import ProjectCards from "../components/ProjectCards";
import "../styles/Projects.css";
const eventsData = [
  {
    icon: "🦑",
    title: "Lovecraftian virtural-pet",
    github:
      "https://github.com/ZeroBitzz/lovecraftian-virtual-pet#lovecraftian-virtual-pet",
    description:
      "Do you want a pet without all the responsibility of taking care of a biological lifeform? Then you have arrived at the right place.",
  },
  {
    icon: "👽",
    title: "Jose Dev",
    github: "Personal Portfolio",
    description:
      "Balancing a Full-Stack Web Development Bootcamp with my studies at the University of Utah, showcasing my commitment to professional growth.",
  },
  {
    icon: "☀️",
    title: "Weather App",
    github: "https://github.com/itsnotjose/Weather-Dashboard",
    description:
      "WeatherApp is a web application that provides current weather information and forecasts for cities around the world. This application uses data from the OpenWeather API.",
  },
  {
    icon: "🐉",
    title: "Team Profile Generator",
    github: "https://github.com/itsnotjose/team-profile-generator",
    description:
      "This is a quick and easy way to generate a team profile in minutes through the command line. ",
  },
];

function Projects() {
  return (
    <div className="projects">
      <ProjectCards events={eventsData} />
    </div>
  );
}

export default Projects;
