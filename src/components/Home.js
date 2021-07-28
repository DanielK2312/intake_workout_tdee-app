// Home page displaying buttons to select a certain functionality

import React from "react";

const Home = () => {
  return (
    <div className="ui container">
      <div
        className="btns ui buttons"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <a
          style={{ borderStyle: "solid", borderWidth: "1px" }}
          className="button-ele ui button ui inverted primary button"
          href="/workout"
        >
          Generate Workout
        </a>
        <a
          style={{ borderStyle: "solid", borderWidth: "1px" }}
          className="button-ele ui button ui inverted primary button"
          href="/searchExercise"
        >
          Search Exercise
        </a>
        <a
          style={{ borderStyle: "solid", borderWidth: "1px" }}
          className="button-ele ui button ui inverted primary button"
          href="/dailyIntake"
        >
          Calculate Daily Intake
        </a>
      </div>
    </div>
  );
};

export default Home;
