import React from 'react';
import '../css/VideoItem.css';

const VideoItem = ({ video, showDetail }) => {
  return (
    <div className="video-item">
      <div className="video-thumbnail">
        <img
          src={video.snippet.thumbnails.default.url}
          alt="thumbnail"
          onClick={() => showDetail(video)}
        />
      </div>
      <div className="video-info">
        <div className="video-title" onClick={() => showDetail(video)}>
          {video.snippet.title}
        </div>
        <a
          href={'https://www.youtube.com/' + video.snippet.channel}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="channel-title">{video.snippet.channel}</div>
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
