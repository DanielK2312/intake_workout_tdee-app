import React, { useState } from "react";
import youtube from "../apis/youtube";
import WorkoutGen from "./WorkoutGen";
import CalculateMax from "./CalculateMax";
import Home from "./Home";
import Route from "./Route";
import Header from "./Header";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import DailyIntake from "./DailyIntake";

const App = () => {
  // keep track of the list of videos received from API request
  const [videos, setVideos] = useState([]);

  const onYoutubeSubmit = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });

    setVideos(response.data.items);
  };

  return (
    <div>
      {/* Hide Navbar if on home page */}
      {window.location.pathname === "/" ? (
        <div>
          <Route path="/">
            <Home />
          </Route>
        </div>
      ) : (
        <div>
          <Header />{" "}
          <Route path="/workout">
            <CalculateMax />

            <WorkoutGen />
          </Route>
          <Route path="/searchExercise">
            {/* Adds room on left and right sides of search bar */}
            <div className="ui container">
              <SearchBar onYoutubeSubmit={onYoutubeSubmit} />
              {/* Pass list of videos as prop down to VideoList Component to be used */}
              <VideoList videos={videos} />
            </div>
          </Route>
          <Route path="/dailyIntake">
            <div className="ui container" style={{ marginTop: "100px" }}>
              <DailyIntake />
            </div>
          </Route>
        </div>
      )}
    </div>
  );
};

export default App;
// test
