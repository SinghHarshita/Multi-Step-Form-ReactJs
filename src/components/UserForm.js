import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormUserPersonalDetails from './FormUserPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export default class UserForm extends Component {
    
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step : step + 1
        });
    }

    // Go Back to the previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step : step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input] : e.target.value
        });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }
        
        switch(step){
            case 1:
                return <FormUserDetails
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            case 2:
                return (
                    <FormUserPersonalDetails
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    prevStep = {this.prevStep}
                    />
                )
            case 3:
                return (
                    <Confirm
                    nextStep = {this.nextStep}
                    // handleChange = {this.handleChange}
                    values = {values}
                    prevStep = {this.prevStep}
                    />
                )
            case 4:
                return <Success/>
        }

    }
}
