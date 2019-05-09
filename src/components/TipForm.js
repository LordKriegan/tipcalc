import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class TipForm extends Component {
    //standard form component. data held in state, updated with onChangeHandler
    state = {
        bill: '',
        percentage: '15',
        split: '1'
    }
    onChangeHandler = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        }, () => {
            //if split was modified, execute changeSplit function from parent so that the other component will update
            if (name === "split") {
                this.props.changeSplit(value)
            }
            //update tip total
            const { bill, percentage, split } = this.state;
            this.props.calcTip(bill, percentage, split);
        })
    }

    render() {
        //setting height to 100% to fill column.
        return (
            <Card style={{ height: "100%" }} >
                <Card.Header className="text-center" as="h5">Bill Information</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="bill">
                            <Form.Label>Bill Amount: {<Form.Text style={{ color: "red" }}>{(isNaN(this.state.bill) || parseFloat(this.state.bill) <= 0) ? "*Please enter a valid amount" : ""}</Form.Text>}</Form.Label>
                            <Form.Control name="bill" value={this.state.bill} onChange={this.onChangeHandler} type="number" min="0" />
                        </Form.Group>
                        <Form.Group controlId="percentage">
                            <Form.Label>Tip Percentage: {<Form.Text style={{ color: "red" }}>{(isNaN(this.state.percentage) || parseFloat(this.state.percentage) < 1) ? "*Please enter a valid amount" : ""}</Form.Text>}</Form.Label>
                            <Form.Control name="percentage" value={this.state.percentage} onChange={this.onChangeHandler} type="number" min="1" placeholder="15" />
                        </Form.Group>
                        <Form.Group controlId="splitNum">
                            <Form.Label>Split: {<Form.Text style={{ color: "red" }}>{(isNaN(this.state.split) || parseFloat(this.state.split) < 1 || !Number.isInteger(parseFloat(this.state.split))) ? "*Please enter a valid amount" : ""}</Form.Text>}</Form.Label>
                            <Form.Control name="split" value={this.state.split} onChange={this.onChangeHandler} type="number" min="1" placeholder="1" />
                            <Form.Text className="text-muted">Leave at 1 if you are not splitting.</Form.Text>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        )
    }

}

export default TipForm;