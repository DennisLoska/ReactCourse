import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderValue(value) {
    return value === 'english' ? 'Submit' : 'Senden';
  }

  render() {
    return (
      <button>
        <LanguageContext.Consumer>
          {value => this.renderValue(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
