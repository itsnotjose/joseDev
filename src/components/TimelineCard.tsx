import React from "react";

import "../styles/TimelineCards.css";

const TimelineCards = ({ events }) => {
  return (
    <div className="container">
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-card">
            <div className="timeline-date">{event.date}</div>
            <div className="cards">
              <div className="card-content">
                <h2 className="title">{event.title}</h2>
                <p className="description">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineCards;
