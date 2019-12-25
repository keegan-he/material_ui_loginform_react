import React, { Component } from 'react';
import FormDetails from './FormDetails';
import Confirm from './Confirm';
import Success from './Success';
import PersonalDetails from './PersonalDetails';

class Form extends Component {

    state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      ocupation: '',
      city: '',
      bio: ''
    };


  // Go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle input fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;

    const { firstName, lastName, email, occupation, city, bio } = this.state;

    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 2: 
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3: 
        return (
          <Confirm
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            values={values}
          />
        );
        case 4: 
            return <Success />;
    }
  }
}

export default Form;
