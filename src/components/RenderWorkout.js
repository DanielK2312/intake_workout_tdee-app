import React from "react";
import { exerciseData } from "./Exercises";

const RenderWorkout = ({ selected, squatTopSet, squatBackOffSet }) => {
  /**
   * Render workout based off of dropdown menu value passed as prop from selected
   */
  const getChest = exerciseData.map((exercise, index) => {
    if (
      selected.workout === "Chest Powerlifter Style" &&
      exercise.body_part === "Chest"
    ) {
      return (
        <div key={index}>
          {exercise.exercise} {exercise.sets}
        </div>
      );
    } else if (
      selected.workout === "Back Powerlifter Style" &&
      exercise.body_part === "Back"
    ) {
      return (
        <div key={index}>
          {exercise.exercise} {exercise.sets}
        </div>
      );
    } else if (
      selected.workout === "Legs Powerlifter Style" &&
      exercise.body_part === "Legs"
    ) {
      return (
        <div key={index}>
          {exercise.exercise} {squatTopSet} {exercise.sets} {squatBackOffSet}
        </div>
      );
    }
  });

  return <div>{getChest}</div>;
};

export default RenderWorkout;
