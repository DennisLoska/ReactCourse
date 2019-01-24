import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, updateStream } from '../../actions';
import StreamForm from './Streamform';

class StreamEdit extends React.Component {
  // DO NOT DO THIS because of ownProps in mapStateToProps function direct access to index
  // getStreamDetails = () => {
  //   return this.props.streams.map(stream => {
  //     if (stream.id.toString() === this.props.match.params.id) {
  //       return (
  //         <div key={stream.id}>
  //           <div>{stream.title}</div>
  //           <div>{stream.description}</div>
  //         </div>
  //       );
  //     } else return null;
  //   });
  // };
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    const { stream } = this.props;
    this.props.updateStream(stream.id, formValues);
  };

  render() {
    const { stream } = this.props;
    if (stream) {
      return (
        <div>
          <h3>Edit your stream:</h3>
          <StreamForm
            callback={this.onSubmit}
            title={stream.title}
            initialValues={{
              title: stream.title,
              description: stream.description
            }}
          />
        </div>
      );
    } else return <div>Loading...</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, updateStream }
)(StreamEdit);
