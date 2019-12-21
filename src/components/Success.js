import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import {List, ListItem} from 'material-ui/List';
// import RaisedButton from 'material-ui/RaisedButton';

export default class Success extends Component {
    
    // continue = e => {
    //     e.preventDefault();
    //     // Process Form //
    //     this.props.nextStep();
    // }

    // back = e => {
    //     e.preventDefault();
    //     // Process Form //
    //     this.props.prevStep();
    // }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar 
                        title = "Confirm"
                    />
                    
                    <h1>Thank you for submitting the Form!</h1>
                    <p>You will get an email with further instructions.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

// const styles = {
//     button : {
//         margin : 15
//     }
// }
