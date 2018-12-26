import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Config from '../config';

class App extends React.Component {
  async onFormSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ' + new Config().getAccess()
      }
    });

    console.log(response.data.results);
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
