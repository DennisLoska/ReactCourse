import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ({ videoId, thumbnail, title, channel }) => {
  if (!videoId) videoId = channel;
  return (
    <div className="video-item">
      <div className="video-thumbnail">
        <img src={thumbnail.url} alt="thumbnail" />
      </div>
      <div className="video-info">
        <div className="video-title">{title}</div>
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
