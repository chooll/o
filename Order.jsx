import React from 'react';
import {Button, Card} from "react-bootstrap";

const Order = ({order}) => {
    return (
        <Card>
            <Card.Img variant="top" className="img-fluid" src="image/courier.jpg"/>
            <Card.Body>
                <Card.Body>
                    <Card.Title>
                        {order.name}
                    </Card.Title>
                    <Card.Text>
                        {order.descript}
                    </Card.Text>
                    <h4>Стоимость {order.cost}.</h4>
                    <Button variant="success" className="w-100">В корзину</Button>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default Order;