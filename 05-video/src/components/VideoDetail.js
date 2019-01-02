import React from 'react';
import '../css/VideoDetail.css';

const VideoDetail = props => {
  console.log(props);

  if (!props.video) return <div />;

  return (
    <div className="detail-wrapper">
      <iframe
        width="100%"
        height="70%"
        src={'https://www.youtube.com/embed/' + props.video.id.videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={props.video.snippet.title}
      />
      <div className="ui segment field">
        <div className="detail-title">{props.video.snippet.title}</div>
        <div className="detail-description">
          {props.video.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
