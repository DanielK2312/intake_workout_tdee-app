// dropdown implementation

import React, { useState } from "react";
import RenderWorkout from "./RenderWorkout";

const WorkoutGenerator = ({
  dropdownOptions,
  selected,
  onSelectedChange,
  squatTopSet,
  squatBackOffSet,
}) => {
  // toggle dropdown invisibility
  const [open, setOpen] = useState(false);

  /**
   * Map through workouts and return div option for dropdown
   */
  const workoutOptions = dropdownOptions.map((option, index) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={index}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
        style={{ fontSize: "15px" }}
      >
        {option.value}
      </div>
    );
  });

  return (
    <div className="ui container" style={{ textAlign: "center" }}>
      <div className="field">
        <label className="label">Select a Workout</label>
        <div
          onClick={() => setOpen(!open)}
          className={`field ui selection dropdown ${
            open ? "visible active" : ""
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.value}</div>
          <div
            onClick={() => setOpen(!open)}
            className={`menu ${open ? "visible transition" : ""}`}
          >
            {workoutOptions}
          </div>
        </div>
        <RenderWorkout
          selected={selected}
          squatTopSet={squatTopSet}
          squatBackOffSet={squatBackOffSet}
        />
      </div>
    </div>
  );
};

export default WorkoutGenerator;
