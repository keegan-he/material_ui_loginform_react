import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
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
          <AppBar 
          title="Please Enter User Details" 
          />
          <TextField
            hintText="Enter First Name..."
            floatingLabelText="First Name"
            onChange={this.props.handleChange('firstName')}
            defaultValue={this.props.values.firstName}
          />

          <br />

          <TextField
            hintText="Enter Last Name..."
            floatingLabelText="Last Name"
            onChange={this.props.handleChange('lastName')}
            defaultValue={this.props.values.lastName}
          />
          <br />

          <TextField
            hintText="Enter Email Address"
            floatingLabelText="Email"
            onChange={this.props.handleChange('email')}
            defaultValue={this.props.values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            secondary={true}
            styles={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MultiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default PersonalDetails;
