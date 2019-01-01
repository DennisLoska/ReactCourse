import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  videoRequest = request => {
    console.log(request);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar submitForm={this.videoRequest} />
      </div>
    );
  }
}

export default App;
