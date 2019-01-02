import React from 'react';
import '../css/VideoItem.css';

const VideoItem = props => {
  if (!props.videoId) props.videoId = props.channel;

  const showDetail = () => {
    props.showVideoDetail(props);
  };
  return (
    <div className="video-item">
      <div className="video-thumbnail">
        <img src={props.thumbnail.url} alt="thumbnail" onClick={showDetail} />
      </div>
      <div className="video-info">
        <div className="video-title" onClick={showDetail}>
          {props.title}
        </div>
        <a
          href={'https://www.youtube.com/' + props.channel}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="channel-title">{props.channel}</div>
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
