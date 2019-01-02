import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import '../css/main.css';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.videoRequest('web development');
  }

  videoRequest = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  showDetail = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar submitForm={this.videoRequest} />
        <div className="content-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} showDetail={this.showDetail} />
        </div>
      </div>
    );
  }
}

export default App;
