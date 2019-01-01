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
          <div className="field">
            <label className="label">Video search</label>
            <input
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
