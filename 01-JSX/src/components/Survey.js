import React from 'react';

class Survey extends React.Component {
  state = { name: '', email: '', message: '', success: false };

  submitForm = event => {
    event.preventDefault();
    this.setState({ success: true });
  };

  formResponse = () => {
    if (this.state.success) {
      return (
        <div className="form-response">Thanks, we received your request!</div>
      );
    } else
      return (
        <div className="form-response">Sorry, something went wrong there.</div>
      );
  };
  render() {
    console.log(this.state);

    return (
      <div>
        <div className="form-description">
          <h2>Please contact us!</h2>
          <p>
            We will answer all your question and will get back to you as soon as
            possible. Just tell us what your issue is
          </p>
        </div>
        <form onSubmit={this.submitForm}>
          <label className="form-field">Your name</label>
          <input
            className="form-field"
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label className="form-field">E-mail</label>
          <input
            className="form-field"
            type="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label className="form-field">More information:</label>
          <textarea
            className="form-field form-textarea"
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
          />
          <button className="form-btn" type="submit">
            SEND
          </button>
        </form>
        {this.formResponse()}
      </div>
    );
  }
}

export default Survey;
