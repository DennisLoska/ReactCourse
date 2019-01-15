import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '433496179257-afais2mvb8lut9nt1d6nfu095vepdruf.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
