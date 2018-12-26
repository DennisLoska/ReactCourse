import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Config from '../config';

class App extends React.Component {
  onFormSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ' + new Config().getAccess()
      }
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;

/* in order to restore Config.js:

class Config {
  constructor() {
    this.access =
      'your access-key';
  }
  getAccess() {
    return this.access;
  }
}

export default Config;

*/
