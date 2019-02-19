import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderValue(language) {
    return language === 'english' ? 'Submit' : 'Senden';
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button style={{ backgroundColor: color }}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderValue(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
