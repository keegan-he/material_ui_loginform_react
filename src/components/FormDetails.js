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
    return (
      <MultiThemeProvider>
        <React.Fragment>
          <AppBar title="Please Enter User Details" />
          <TextField 
          hintText="Enter First Name..."
          floatingLabelText="First Name"
          onChange={this.props.handleChange('firstName')}
          defaultValue={this.props.values.firstName}
          />
        </React.Fragment>
      </MultiThemeProvider>
    );
  }
}

export default FormDetails;
