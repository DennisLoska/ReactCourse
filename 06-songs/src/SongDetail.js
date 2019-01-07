import React from 'react';
import './SongDetail.css';

class SongDetail extends React.Component {
  render() {
    return (
      <div className="song-detail">
        SongDetail: <br />
        <span>{this.props.song.title}</span>
      </div>
    );
  }
}

export default SongDetail;
