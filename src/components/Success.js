import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {
  continue = e => {
    e.preventDefault();
    //Send data to backend here
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    return (
      <MultiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Submitting!</h1>
          <p>
            {' '}
            You will receive a confirmation email with further instructions{' '}
          </p>
        </React.Fragment>
      </MultiThemeProvider>
    );
  }
}

export default Success;
