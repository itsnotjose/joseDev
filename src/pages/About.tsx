import React from "react";
import AboutMain from "../components/AboutMain";
import AboutSection from "../components/AboutSection";
import TimelineCards from "../components/TimelineCard";

const eventsData = [
  {
    title: " 🎓 Graduated Bootcamp",
    date: "April 2023",
  },
  {
    title: "💻 Started Bootcamp ",
    date: "October 2022",
    description:
      "Balancing a Full-Stack Web Development Bootcamp with my studies at the University of Utah, showcasing my commitment to professional growth.",
  },
  {
    title: "🏫 Started University",
    date: "August 2021",
    description:
      "I embarked on my journey to pursue a career in pre-medicine at the University of Utah",
  },

  {
    title: "🎂 Birthday",
    date: "June 2003",
    description: "I was coded to exist on June 17, 2003.",
  },
  {
    title: "🦖 Dinosaurs Went Extinct",
    date: "65 million years ago",
  },
];

function About() {
  return (
    <div>
      <AboutMain />
      <AboutSection />
      <TimelineCards events={eventsData} />
    </div>
  );
}

export default About;
