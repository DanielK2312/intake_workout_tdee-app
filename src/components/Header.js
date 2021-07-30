// navbar implementation

import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="ui menu">
      <a href="/" className="item">
        Home
      </a>
      <a href="/workout" className="item">
        Generate Workout
      </a>
      <a href="/searchExercise" className="item">
        Search Exercise
      </a>
      <a href="/dailyIntake" className="item">
        Calculate Daily Intake
      </a>
    </div>
  );
};

export default Header;
