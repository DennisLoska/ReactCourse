import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

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

  render() {
    if (this.props.stream) {
      return (
        <div>
          StreamEdit
          <div> {this.props.stream.title}</div>
          <div> {this.props.stream.description}</div>
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
  { fetchStream }
)(StreamEdit);
