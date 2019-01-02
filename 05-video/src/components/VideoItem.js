import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ({ id, thumbnail, title, channel }) => {
  return (
    <div className="video-item">
      <div className="video-thumbnail">
        <a
          href={'https://www.youtube.com/' + id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={thumbnail.url} alt="thumbnail" />
        </a>
      </div>
      <div className="video-info">
        <a
          href={'https://www.youtube.com/' + id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="video-title">{title}</div>
          <div className="channel-title">{channel}</div>
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
