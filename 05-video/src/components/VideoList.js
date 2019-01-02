import React from 'react';
import VideoItem from './VideoItem';
import '../css/VideoList.css';

const VideoList = props => {
  function renderItems() {
    return props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          videoId={video.id.videoId}
          channelId={video.snippet.channelId}
          thumbnail={video.snippet.thumbnails.default}
          channel={video.snippet.channelTitle}
          title={video.snippet.title}
        />
      );
    });
  }
  return <div className="video-list">{renderItems()}</div>;
};

export default VideoList;
