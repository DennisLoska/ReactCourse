import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
  function renderItems() {
    return props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          videoId={video.id.videoId}
          description={video.snippet.description}
          thumbnail={video.snippet.thumbnails.default}
          title={video.snippet.title}
        />
      );
    });
  }
  return <div className="video-list">{renderItems()}</div>;
};

export default VideoList;
