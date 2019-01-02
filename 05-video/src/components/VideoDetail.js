import React from 'react';

const VideoDetails = ({ video }) => {
  return (
    <div className="detail-wrapper">
      <div className="detail-video">{video.videoId}</div>
      <div className="detail-title">{video.title}</div>
      <div className="detail-description">{video.description}</div>
    </div>
  );
};

export default VideoDetails;
