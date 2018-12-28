import React from 'react';

class Survey extends React.Component {
  state = { name: '', email: '', message: '' };

  submitForm() {
    console.log(this.state);
  }
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
        <form onSubmit={this.submitForm()}>
          <label className="form-field">Your name</label>
          <input
            className="form-field"
            onChange={this.setState({ name: this.value })}
            type="text"
          />
          <label className="form-field">E-mail</label>
          <input
            className="form-field"
            onChange={this.setState({ email: this.props.value })}
            type="email"
          />
          <label className="form-field">More information:</label>
          <textarea
            className="form-field form-textarea"
            value={this.state.text}
          />
          <button className="form-btn" type="submit">
            SEND
          </button>
        </form>
      </div>
    );
  }
}

export default Survey;
