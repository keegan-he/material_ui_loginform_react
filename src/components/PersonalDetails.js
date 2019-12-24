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
          title="Please Enter Personal Details" 
          />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={this.props.handleChange('occupation')}
            defaultValue={this.props.values.occupation}
          />

          <br />

          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={this.props.handleChange('city')}
            defaultValue={this.props.values.city}
          />
          <br />

          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={this.props.handleChange('bio')}
            defaultValue={this.props.values.bio}
          />
          <br />
          <RaisedButton
            label="Continue"
            secondary={true}
            styles={styles.button}
            onClick={this.continue}
          />

          <RaisedButton
            label="Back"
            secondary={false}
            styles={styles.button}
            onClick={this.back}
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
