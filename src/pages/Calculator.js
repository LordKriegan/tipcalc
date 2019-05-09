import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import { TipForm } from '../components';

class Calculator extends Component { 
    state = {
        output: '',
        split: 1
    }
    calcTip = (bill, percentage, splitNum) => {
        this.setState({
            output: 1
        })
    }
    changeSplit = (splitNum) => {

        this.setState({
            split: splitNum
        });
    }
    render() {
        return(
            <Row className="match-my-cols">
                <Col xs={12} md={{span: 4, offset: 1}}>
                    <TipForm changeSplit={this.changeSplit} className="h-100"/>
                </Col>
                <Col xs={12} md={{span: 4, offset: 1}}>
                    <Jumbotron className="h-100">
                        <p>{this.state.split}</p>
                    </Jumbotron>
                </Col>
            </Row>
        )
    }
}

export default Calculator;