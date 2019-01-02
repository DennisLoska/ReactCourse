import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ({ videoId, thumbnail, title, channel }) => {
  if (!videoId) videoId = channel;
  return (
    <div className="video-item">
      <div className="video-thumbnail">
        <a
          href={'https://www.youtube.com/' + videoId}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={thumbnail.url} alt="thumbnail" />
        </a>
      </div>
      <div className="video-info">
        <a
          href={'https://www.youtube.com/' + videoId}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="video-title">{title}</div>
        </a>
        <a
          href={'https://www.youtube.com/' + channel}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="channel-title">{channel}</div>
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
