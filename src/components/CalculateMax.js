import React from "react";
import "./styles.css";

class CalculateMax extends React.Component {
  state = {
    squatMax: "",
    squatTopSetWeight: 0,
    squatBackOffSetWeight: 0,
    showSquat: false,
    benchMax: "",
    benchTopSetWeight: 0,
    benchBackOffSetWeight: 0,
    showBench: false,
    deadMax: "",
    deadTopSetWeight: 0,
    deadBackOffSetWeight: 0,
    showDead: false,
    showSquatErrorMessage: false,
    showBenchErrorMessage: false,
    showDeadErrorMessage: false,
  };

  // make error message disappear after 3 seconds
  componentDidUpdate() {
    // only shows error message for form that has invalid input
    // shows error message for 3 seconds then sets it to false so it disappears
    if (this.state.showSquatErrorMessage === true) {
      setTimeout(() => this.setState({ showSquatErrorMessage: false }), 3000);
    } else if (this.state.showBenchErrorMessage === true) {
      setTimeout(() => this.setState({ showBenchErrorMessage: false }), 3000);
    } else if (this.state.showDeadErrorMessage === true) {
      setTimeout(() => this.setState({ showDeadErrorMessage: false }), 3000);
    }
  }

  /**
   *
   * @returns red error box when invalid input is entered
   */
  invalidBox = () => {
    return (
      <div className="ui negative message">
        <div className="header">
          There were some errors with your submission
        </div>
        <ul className="list">
          <li>
            You must enter a whole or decimal number with no letters or symbols
          </li>
        </ul>
      </div>
    );
  };

  /**
   *
   * @param {number} max
   * @returns weight for first set of exercise
   */
  calculateInitialTopSet = (max) => {
    return Math.floor(max * 0.75);
  };

  /**
   *
   * @param {number} topSetWeight
   * @returns weight for second set of exercise
   */
  calculateBackOff = (topSetWeight) => {
    return Math.floor(topSetWeight * 0.7);
  };

  /**
   * handles events upon submitting squat form
   * @param {event} e
   */
  handleSquatSubmission = (e) => {
    e.preventDefault();
    let top = this.calculateInitialTopSet(parseInt(this.state.squatMax));
    let backOff = this.calculateBackOff(top);

    if (this.state.squatMax === "" || isNaN(this.state.squatMax)) {
      this.setState({ showSquatErrorMessage: true });
    } else {
      this.setState({
        squatTopSetWeight: top,
        squatBackOffSetWeight: backOff,
        showSquat: true,
        squatMax: "",
      });
    }
  };

  /**
   * handles events upon submitting bench form
   * @param {event} e
   */
  handleBenchSubmission = (e) => {
    e.preventDefault();
    let top = this.calculateInitialTopSet(parseInt(this.state.benchMax));
    let backOff = this.calculateBackOff(top);

    if (this.state.benchMax === "" || isNaN(this.state.benchMax)) {
      this.setState({ showBenchErrorMessage: true });
    } else {
      this.setState({
        benchTopSetWeight: top,
        benchBackOffSetWeight: backOff,
        showBench: true,
        benchMax: "",
      });
    }
  };

  /**
   * handles events upon submitting deadlift form
   * @param {event} e
   */
  handleDeadliftSubmission = (e) => {
    e.preventDefault();
    let top = this.calculateInitialTopSet(parseInt(this.state.deadMax));
    let backOff = this.calculateBackOff(top);

    if (this.state.deadMax === "" || isNaN(this.state.deadMax)) {
      this.setState({ showDeadErrorMessage: true });
    } else {
      this.setState({
        deadTopSetWeight: top,
        deadBackOffSetWeight: backOff,
        showDead: true,
        deadMax: "",
      });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "65px" }}>
        <form className="ui form" onSubmit={this.handleSquatSubmission}>
          <div className="field">
            <label>Enter Squat Max</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => this.setState({ squatMax: e.target.value })}
              value={this.state.squatMax}
            ></input>
            {this.state.showSquat && (
              <div className="ui positive message">
                <i
                  className="close icon"
                  onClick={() => this.setState({ showSquat: false })}
                ></i>
                <div className="header">
                  Squat Set 1 Weight: {this.state.squatTopSetWeight} lbs
                  <br />
                  Squat Set 2 Weight: {this.state.squatBackOffSetWeight} lbs
                </div>
              </div>
            )}
            {this.state.showSquatErrorMessage && <div>{this.invalidBox()}</div>}
            <button
              type="submit"
              className="fluid ui primary button"
              style={{ marginTop: "10px" }}
            >
              Get Squat Working Weight
            </button>
          </div>
        </form>
        <form className="ui form" onSubmit={this.handleBenchSubmission}>
          <div className="field">
            <label>Enter Bench Max</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => this.setState({ benchMax: e.target.value })}
              value={this.state.benchMax}
            ></input>
            {this.state.showBench && (
              <div className="ui positive message">
                <i
                  className="close icon"
                  onClick={() => this.setState({ showBench: false })}
                ></i>
                <div className="header">
                  Squat Set 1 Weight: {this.state.benchTopSetWeight} lbs
                  <br />
                  Squat Set 2 Weight: {this.state.benchBackOffSetWeight} lbs
                </div>
              </div>
            )}
            {this.state.showBenchErrorMessage && <div>{this.invalidBox()}</div>}
            <button
              type="submit"
              className="fluid ui primary button"
              style={{ marginTop: "10px" }}
            >
              Get Bench Working Weight
            </button>
          </div>
        </form>
        <form className="ui form" onSubmit={this.handleDeadliftSubmission}>
          <div className="field">
            <label>Enter Deadlift Max</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => this.setState({ deadMax: e.target.value })}
              value={this.state.deadMax}
            ></input>
            {this.state.showDead && (
              <div className="ui positive message">
                <i
                  className="close icon"
                  onClick={() => this.setState({ showDead: false })}
                ></i>
                <div className="header">
                  Squat Set 1 Weight: {this.state.deadTopSetWeight} lbs
                  <br />
                  Squat Set 2 Weight: {this.state.deadBackOffSetWeight} lbs
                </div>
              </div>
            )}
            {this.state.showDeadErrorMessage && <div>{this.invalidBox()}</div>}
            <button
              type="submit"
              className="fluid ui primary button"
              style={{ marginTop: "10px" }}
            >
              Get Deadlift Working Weight
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CalculateMax;
