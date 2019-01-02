import React from 'react';
import VideoItem from './VideoItem';
import '../css/VideoList.css';

const VideoList = props => {
  function renderItems() {
    return props.videos.map(({ id, snippet }) => {
      return (
        <VideoItem
          key={id.videoId}
          videoId={id.videoId}
          channelId={snippet.channelId}
          thumbnail={snippet.thumbnails.default}
          channel={snippet.channelTitle}
          title={snippet.title}
        />
      );
    });
  }
  return <div className="video-list">{renderItems()}</div>;
};

export default VideoList;
