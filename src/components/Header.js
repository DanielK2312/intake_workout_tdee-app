// navbar implementation

import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="ui container">
      <div className="ui blue four item inverted menu">
        <a href="/" className="header item">
          Home
        </a>
        <a
          href="/workout"
          className={
            window.location.pathname === "/workout" ? "active item" : "item"
          }
        >
          Generate Workout
        </a>
        <a
          href="/searchExercise"
          className={
            window.location.pathname === "/searchExercise"
              ? "active item"
              : "item"
          }
        >
          Search Exercise
        </a>
        <a
          href="/dailyIntake"
          className={
            window.location.pathname === "/dailyIntake" ? "active item" : "item"
          }
        >
          Calculate Daily Intake
        </a>
      </div>
    </div>
  );
};

export default Header;

// check
