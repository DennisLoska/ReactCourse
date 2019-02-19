import React from 'react';
import UserCreate from './UserCreate';
import Languagecontext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english' };

  renderField = () => {
    return (
      <Languagecontext.Provider value={this.state.language}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
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
