import React from 'react';
import { fetchStreamList } from '../../actions';
import { connect } from 'react-redux';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreamList();
  }

  renderStreamList = () => {
    return this.props.streams.map(stream => {
      return (
        <div key={stream.id}>
          <div>{stream.title}</div>
          <div>{stream.description}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        Streams:
        <div>{this.renderStreamList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { streams: state.streams };
};

export default connect(
  mapStateToProps,
  { fetchStreamList }
)(StreamList);
