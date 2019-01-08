import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

import './SongList.css';

class SongList extends React.Component {
  render() {
    return this.props.songs.map((song, index) => {
      return (
        <div key={index} className="song-list-item">
          <span>{song.title}</span>
          <button
            className="song-btn"
            onClick={() => {
              this.props.selectSong(song);
            }}
          >
            Select
          </button>
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
