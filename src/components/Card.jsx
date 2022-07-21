import React from "react";
import { Card, Button } from "react-bootstrap";

function Cardmy() {
    return (
        <Card id="card" className="w-25">
            <Card.Img src="https://mobimg.b-cdn.net/v3/fetch/87/8708ba447820d0aa37d91da9340a80c0.jpeg?h=900&r=0.5" />
            <div className="bg-grey">
                <Card.Body>
                    <Card.Text>
                        Москва
                    </Card.Text>
                </Card.Body>

            </div >
        </Card>

    )
}

export default Cardmy;