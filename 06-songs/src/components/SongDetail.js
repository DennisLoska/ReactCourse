import React from 'react';
import { connect } from 'react-redux';
import './SongDetail.css';

class SongDetail extends React.Component {
  render() {
    if (!this.props.song) {
      return <div className="song-detail">Select a song.</div>;
    }
    return (
      <div className="song-detail">
        SongDetail: <br />
        <span>{this.props.song.title}</span>
        <br />
        <span>{this.props.song.length}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
