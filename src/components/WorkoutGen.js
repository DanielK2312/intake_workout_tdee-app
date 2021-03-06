import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { WorkoutOptions } from "./WorkoutOptions";
import RenderChosenWorkout from "./RenderChosenWorkout";

const WorkoutGen = () => {
  const [chosenWorkout, setChosenWorkout] = useState("");

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <hr />
      <h4 className="ui dividing header">Select a Workout to Generate</h4>
      <Dropdown
        placeholder="Select a Workout"
        fluid
        selection
        options={WorkoutOptions}
        onChange={(e) => setChosenWorkout(e.target.innerText)}
      />
      <div className="ui container">
        <RenderChosenWorkout chosenWorkout={chosenWorkout} />
      </div>
    </div>
  );
};

export default WorkoutGen;
