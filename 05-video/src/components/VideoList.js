import React from 'react';
import VideoItem from './VideoItem';
import '../css/VideoList.css';

const VideoList = props => {
  const renderItems = () => {
    return props.videos.map(video => {
      console.log(video);

      return (
        <VideoItem
          key={video.id.vdeoId}
          video={video}
          showDetail={props.showDetail}
        />
      );
    });
  };
  return <div className="video-list">{renderItems()}</div>;
};

export default VideoList;
