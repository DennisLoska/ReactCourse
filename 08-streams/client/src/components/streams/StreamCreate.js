import React from 'react';
import { createStream } from '../../actions';
import { connect } from 'react-redux';
import StreamForm from './Streamform';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a stream:</h3>
        <StreamForm callback={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
