import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { TipForm, TipOutput } from '../components';

class Calculator extends Component { 
    state = {
        output: 0.00,
        split: 1
    }
    //calculate total tip and set state. if invalid numbers are specified it will return instead
    calcTip = (bill, percentage, splitNum) => {
        if (
            isNaN(bill) || parseFloat(bill) <= 0 ||
            isNaN(percentage) || parseFloat(percentage) < 1 ||
            isNaN(splitNum) ||  parseFloat(splitNum) < 1 || !Number.isInteger(parseFloat(splitNum))
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
    //update state to update tipoutput component.
    changeSplit = (splitNum) => {
        this.setState({
            split: splitNum
        });
    }
    render() {
        //match-my-cols makes all columns the same height. cards stack on mobile screens and are side by side on larger screens.
        return(
            <Row className="match-my-cols">
                <Col xs={12} md={{span: 4, offset: 1}}>
                    <TipForm calcTip={this.calcTip} changeSplit={this.changeSplit} />
                </Col>
                <Col xs={12} md={{span: 4, offset: 1}}>
                    <TipOutput split={this.state.split} totalTip={this.state.output} />
                </Col>
            </Row>
        )
    }
}

export default Calculator;