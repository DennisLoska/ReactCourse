import React from 'react';

class Survey extends React.Component {
  render() {
    return (
      <div>
        <div className="form-description">
          <h2>Please contact us!</h2>
          <p>
            We will answer all your question and will get back to you as soon as
            possible. Just tell us what your issue is
          </p>
        </div>
        <form>
          <label className="form-field">Your name</label>
          <input className="form-field" type="text" />
          <label className="form-field">E-mail</label>
          <input className="form-field" type="email" />
          <label className="form-field">More information:</label>
          <textarea className="form-field form-textarea" />
          <button className="form-btn" type="submit">
            SEND
          </button>
        </form>
      </div>
    );
  }
}

export default Survey;
