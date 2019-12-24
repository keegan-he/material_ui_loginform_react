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

  render() {
    return (
      <MultiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Details" />
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

export default Confirm;
