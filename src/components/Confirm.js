import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, bio, city }
    } = this.props;
    return (
      <MultiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Details" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />

            <ListItem primaryText="Last Name" secondaryText={lastName} />

            <ListItem primaryText="Email" secondaryText={email} />

            <ListItem primaryText="Occupatiion" secondaryText={occupation} />

            <ListItem primaryText="City" secondaryText={city} />

            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
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

export default Confirm;
