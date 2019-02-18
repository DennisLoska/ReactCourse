import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (this.props.stream) {
      return (
        <div>
          StreamDelete
          <Modal
            title="Delete Stream"
            content="Are you sure you want to delete this stream?"
            actions={this.actions}
            onDismiss={() => history.push('/')}
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
  { fetchStream }
)(StreamDelete);
