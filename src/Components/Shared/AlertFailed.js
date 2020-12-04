import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

class AlertFailed extends Component {

    state = { 
        show: true,
    };
    
    handleClose= () => {
        this.setState({ show: false });
    };
    render(){
        if(this.props.open === true)
        {
            return (
                <div>
                <Alert show={this.state.show} variant="danger">
                <Alert.Heading>{this.props.titulo}</Alert.Heading>
                <p>
                    {this.props.cuerpo}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={this.handleClose} variant="outline-danger">
                    Okay!
                    </Button>
                </div>
                </Alert>
            </div>
            )
        }else{ 
            return(
                <div>

                </div>
            )
        }
    };
}

export default AlertFailed;


