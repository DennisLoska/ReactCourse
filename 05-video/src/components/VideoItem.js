import React from 'react';
import '../css/VideoItem.css';

const VideoItem = props => {
  return (
    <div className="video-item">
      <div className="video-thumbnail">
        <a
          href={'https://www.youtube.com/' + props.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={props.thumbnail.url} alt="thumbnail" />
        </a>
      </div>
      <div className="video-info">
        <a
          href={'https://www.youtube.com/' + props.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="video-title">{props.title}</div>
          <div className="channel-title">{props.channel}</div>
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
