import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
 
export class Success extends Component {
    continue= e =>{
        e.preventDefault();
        //Process ur form/create a method to do thati.e send ur data to api
        this.props.nextStep();
    }
     
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Success"/>
                  <h1>Thank You For Your Submission</h1>
                  <p>You will get an email with further instructions</p>
                     </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
 


export default Success;
 
