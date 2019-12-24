import React, { Component } from 'react'

class Form extends Component {
constructor(props) {
    super(props);
    state = {
        step: 1,
        firstName:'',
        lastName: '',
        email: '',
        ocupation: '',
        city: '',
        bio:''
    }
}

// Go to next step
nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    })
}

// Go back to previous step
previousStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    })
}


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Form
