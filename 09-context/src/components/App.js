import React from 'react';
import UserCreate from './UserCreate';
import Languagecontext from '../contexts/LanguageContext';

class App extends React.Component {
  state = { language: 'english' };

  renderField = () => {
    return (
      <Languagecontext.Provider value={this.state.language}>
        <UserCreate />
      </Languagecontext.Provider>
    );
  };

  render() {
    return (
      <>
        <h3 style={{ display: 'inline-block', paddingRight: '10px' }}>
          Select your language:
        </h3>
        <span
          style={{ paddingRight: '10px', cursor: 'pointer' }}
          role="img"
          onClick={e => this.setState({ language: 'german' })}
        >
          🇩🇪
        </span>
        <span
          style={{ paddingRight: '10px', cursor: 'pointer' }}
          role="img"
          onClick={e => this.setState({ language: 'english' })}
        >
          🇺🇸
        </span>
        {this.renderField()}
      </>
    );
  }
}

export default App;
