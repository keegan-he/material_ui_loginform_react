import React, { Component } from 'react';
import FormDetails from './FormDetails';
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

  // Handle fields change
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
            return <h1>Confirm</h1>
        case 4: 
            return <h1>Success</h1>
    }
  }
}

export default Form;
