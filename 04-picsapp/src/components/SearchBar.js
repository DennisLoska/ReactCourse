import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Find some pictures</label>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
