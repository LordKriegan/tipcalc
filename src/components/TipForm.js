import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa'

class TipForm extends Component {

    state = {
        bill: '',
        percentage: '',
        split: ''
    }
    onChangeHandler = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        }, () => {
            if (name === "split") {
                console.log('triggered')
                this.props.changeSplit(value)
            }
        })
    }

    render() {
        return (
            <Card>
                <Card.Header className="text-center" as="h5">Bill Information</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="bill">
                            <Form.Label>Bill Amount: </Form.Label>
                            <Form.Control name="bill" value={this.state.bill} onChange={this.onChangeHandler} type="number" min="0" />
                        </Form.Group>
                        <Form.Group controlId="percentage">
                            <Form.Label>Tip Percentage: </Form.Label>
                            <Form.Control name="percentage" value={this.state.percentage} onChange={this.onChangeHandler} type="number" min="1" />
                        </Form.Group>
                        <Form.Group controlId="splitNum">
                            <Form.Label>Split: </Form.Label>
                            <Form.Control name="split" value={this.state.split} onChange={this.onChangeHandler} type="number" min="1" placeholder="1" />
                            <Form.Text className="text-muted">Leave at 1 if you are not splitting.</Form.Text>
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="primary" type="submit">Calculate the <FaHeart style={{ color: "red" }} /></Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        )
    }

}

export default TipForm;