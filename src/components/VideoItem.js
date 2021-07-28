import "./styles.css";
import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.youtube.com/embed/${video.id.videoId}`}
        >
          <div className="header">{video.snippet.title}</div>
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
