import React from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    if (!this.props.user) return null;
    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId);
  return { user: user };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
