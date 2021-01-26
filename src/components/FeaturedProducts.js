import React from 'react'
import image from "../assets/images/ttt.png"
import Slider from "react-slick";
import { Button, Card, Col, Row } from 'react-bootstrap'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      color: theme.palette.text.secondary,
    }
  }));

export default function FeaturedProducts() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
      };
    const classes = useStyles();
    return (
        <div>
            <div>
                <h1 className={classes.paper}>Featured Products</h1>
            </div>
            <br />
            <div>
                <Slider {...settings}>
                <Col>
                <Card style={{ width: '40rem' }}>
                    <Card.Img src={image} />
                </Card>
                <Card.Text>PRODUCT NAME</Card.Text>
                <Card.Text>$300</Card.Text>
                </Col>
                <Col>
                <Card style={{ width: '40rem' }}>
                    <Card.Img src={image} />
                </Card>
                <Card.Text>PRODUCT NAME</Card.Text>
                <Card.Text>$300</Card.Text>
                </Col>
                <Col>
                <Card style={{ width: '40rem' }}>
                    <Card.Img src={image} />
                </Card>
                <Card.Text>PRODUCT NAME</Card.Text>
                <Card.Text>$300</Card.Text>
                </Col>
                <Col>
                <Card style={{ width: '40rem' }}>
                    <Card.Img src={image} />
                </Card>
                <Card.Text>PRODUCT NAME</Card.Text>
                <Card.Text>$300</Card.Text>
                </Col>
                <Col>
                <Card style={{ width: '40rem' }}>
                    <Card.Img src={image} />
                </Card>
                <Card.Text>PRODUCT NAME</Card.Text>
                <Card.Text>$300</Card.Text>
                </Col>
                <Col>
                <Card style={{ width: '40rem' }}>
                    <Card.Img src={image} />
                </Card>
                <Card.Text>PRODUCT NAME</Card.Text>
                <Card.Text>$300</Card.Text>
                </Col>
                <Col>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={image} />
                </Card>
                <Card.Text>PRODUCT NAME</Card.Text>
                <Card.Text>$300</Card.Text>
                </Col>
                <Col>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={image} />
                </Card>
                <Card.Text>PRODUCT NAME</Card.Text>
                <Card.Text>$300</Card.Text>
                </Col>
                </Slider>
            </div>
            
        </div>
    )
}
