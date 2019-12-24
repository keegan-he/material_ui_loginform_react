import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <MultiThemeProvider>
        <React.Fragment>
          <AppBar title="Please Enter User Details" />
        </React.Fragment>
      </MultiThemeProvider>
    );
  }
}

export default FormDetails;
