import React from "react";
import { exerciseData } from "./Exercises";

const RenderChosenWorkout = ({ chosenWorkout }) => {
  const mapData = exerciseData.map((exercise, index) => {
    console.log(exercise);
    if (
      chosenWorkout === "Push Powerlifter Style" &&
      exercise.body_part === "Push Powerlifter Style"
    ) {
      return (
        <div key={index} style={{ border: "1px solid" }}>
          {exercise.exercise}
          <br />
          {exercise.sets}
        </div>
      );
    } else {
      return <div key={index}></div>;
    }
  });

  return <div>{mapData}</div>;
};

export default RenderChosenWorkout;

//check
