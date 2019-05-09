import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import { TipForm, TipOutput } from '../components';

class Calculator extends Component { 
    state = {
        output: 0.00,
        split: 1
    }
    calcTip = (bill, percentage, splitNum) => {
        if (
            isNaN(bill) || parseInt(bill) <= 0 ||
            isNaN(percentage) || parseInt(percentage) < 1 ||
            isNaN(splitNum) ||  parseInt(splitNum) < 1 || !Number.isInteger(parseInt(splitNum))
            ) {
                console.log("error")
                return;
            }
        const tipTotal = bill * (percentage / 100);
        const splitTotal = tipTotal / splitNum
        this.setState({
            output: ((splitNum > 1) ? splitTotal : tipTotal).toFixed(2)
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
                    <TipForm calcTip={this.calcTip} changeSplit={this.changeSplit} className="h-100"/>
                </Col>
                <Col xs={12} md={{span: 4, offset: 1}}>
                    <TipOutput split={this.state.split} totalTip={this.state.output} className="h-100" />
                </Col>
            </Row>
        )
    }
}

export default Calculator;