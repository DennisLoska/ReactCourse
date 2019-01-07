import React from 'react';
import ReactDOM from 'react-dom';
import SongDetail from './SongDetail';
import SongList from './SongList';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedSong: {} };
    this.songs = [
      {
        title: 'Psalm 51',
        length: '4:36'
      },
      {
        title: 'At the cross',
        length: '3:27'
      },
      {
        title: 'Narrow road',
        length: '2:56'
      }
    ];
  }

  selectSong = song => {
    this.setState({ selectedSong: song });
  };

  render() {
    return (
      <div style={{ display: 'flex' }} className="songs-container">
        <div className="song-list">
          <SongList songs={this.songs} selectSong={this.selectSong} />
        </div>
        <SongDetail song={this.state.selectedSong} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
