import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  submitSearch = event => {
    event.preventDefault();
    this.props.submitForm(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" onSubmit={this.submitSearch}>
        <form className="ui form">
          <label className="label">Video search</label>
          <input
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
