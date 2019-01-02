import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: '' };

  videoRequest = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  showDetail = async video => {
    await this.setState({ selectedVideo: video });
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar submitForm={this.videoRequest} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} showDetail={this.showDetail} />
      </div>
    );
  }
}

export default App;
