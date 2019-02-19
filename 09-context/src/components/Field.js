import React from 'react';
import Languagecontext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = Languagecontext;
  render() {
    const name = this.context === 'english' ? 'Name' : 'Vorname';
    return (
      <>
        <label>{name}</label>
        <input />
      </>
    );
  }
}

export default Field;
