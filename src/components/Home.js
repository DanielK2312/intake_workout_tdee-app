// Home page displaying buttons to select a certain functionality

import React from "react";

const Home = () => {
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <div className="three ui blue basic buttons">
        <a className="ui red button" href="/workout">
          Get Workout
        </a>
        <a className="ui button" href="/searchExercise">
          Lookup
        </a>
        <a className="ui button" href="dailyIntake">
          Calculate Daily Intake
        </a>
      </div>

      <div
        style={{
          marginTop: "50px",
          fontSize: "18px",
          border: "3px solid",
          textAlign: "center",
        }}
      >
        <p>Welcome to my custom React application!</p>
        <div>
          <p>With this application, you are able to do one of three things:</p>
          <ol>
            <li>
              Generate a Workout of your Choice targeting a specific body part
              (Chest, Back, Legs) using the "Get Workout" Button
            </li>
            <li>
              Look up any exercises you are not familiar with using the "Lookup"
              Button
            </li>
            <li>
              Calculate the ideal number of calories you should be eating per
              day to either lose, gain, or maintain weight for optimal
              performance using the "Calculate Daily Intake" button
            </li>
          </ol>
        </div>

        <p>
          The application is still in development and will have more workouts
          able to be generated in the future
        </p>
        <p>Click any of the buttons above to get started!</p>
      </div>
    </div>
  );
};

export default Home;
