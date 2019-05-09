import React from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
const TipOutput = (props) => {
    return (
        <Card>
            <Card.Header className="text-center" as="h5">Total <FaHeart style={{ color: "red" }} /></Card.Header>
            <Card.Body className="text-center">
                <Card.Text as="h1">${props.totalTip}</Card.Text>
                {(props.split > 1 && (Number.isInteger(parseFloat(props.split))))
                    ? <Card.Text>You are splitting the tip {props.split} ways!</Card.Text>
                    : ""}
            </Card.Body>
        </Card>
    )
}

export default TipOutput;