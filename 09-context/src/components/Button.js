import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderValue(value) {
    return value === 'english' ? 'Submit' : 'Senden';
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button style={{ backgroundColor: color }}>
            <LanguageContext.Consumer>
              {value => this.renderValue(value)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
