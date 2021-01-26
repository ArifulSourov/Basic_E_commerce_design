import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import image from "../assets/images/ttt.png"

export default function DemoProducts() {
    return (
        <div>
            <Row>
                <Col></Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                </Card>
            </Col>  
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                </Card>
            </Col>  
            <Col></Col>
            </Row>
            <br />
            <Button variant="secondary">SHOP NOW</Button>
             
        </div>
    )
}
