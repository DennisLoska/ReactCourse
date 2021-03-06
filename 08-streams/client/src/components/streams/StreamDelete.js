import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  deleteStream = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions() {
    return (
      <React.Fragment>
        <button onClick={this.deleteStream} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.stream)
      return 'Are you sure you want to delete this stream?';
    else
      return `Are you sure you want to delete this Stream: ${
        this.props.stream.title
      } ?`;
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
          stream={this.props.stream}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
