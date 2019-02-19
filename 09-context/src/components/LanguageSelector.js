import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <>
        <h3 style={{ display: 'inline-block', paddingRight: '10px' }}>
          Select your language:
        </h3>
        <span
          style={{ paddingRight: '10px', cursor: 'pointer' }}
          role="img"
          onClick={e => this.context.onLanguageChange('german')}
        >
          🇩🇪
        </span>
        <span
          style={{ paddingRight: '10px', cursor: 'pointer' }}
          role="img"
          onClick={e => this.context.onLanguageChange('english')}
        >
          🇺🇸
        </span>
      </>
    );
  }
}

export default LanguageSelector;
