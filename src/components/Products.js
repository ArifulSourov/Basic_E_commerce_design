import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Card, Col, Row } from 'react-bootstrap'
import image from "../assets/images/ttt.png"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Products() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Row xs="2">
                <Col>
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={image} />
                    </Card>
                    <Grid item xs={6}>
                        <Card.Text>PRODUCT NAME</Card.Text>
                        <Card.Text>$300</Card.Text>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="secondary">Add to cart</Button>
                    </Grid>
                </Col>
                <Row xs="2">
                <Row>
                <Col>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={image} />
                    </Card>
                    <Grid item xs={6}>
                        <Card.Text>PRODUCT NAME</Card.Text>
                        <Card.Text>$300</Card.Text>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="secondary">Add to cart</Button>
                    </Grid>
                    
                </Col>
                <Col>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={image} />
                    </Card>
                    <Grid item xs={6}>
                        <Card.Text>PRODUCT NAME</Card.Text>
                        <Card.Text>$300</Card.Text>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="secondary">Add to cart</Button>
                    </Grid>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={image} />
                    </Card>
                    <Grid item xs={6}>
                        <Card.Text>PRODUCT NAME</Card.Text>
                        <Card.Text>$300</Card.Text>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="secondary">Add to cart</Button>
                    </Grid>
                </Col>
                <Col>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={image} />
                    </Card>
                    <Grid item xs={6}>
                        <Card.Text>PRODUCT NAME</Card.Text>
                        <Card.Text>$300</Card.Text>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="secondary">Add to cart</Button>
                    </Grid>
                </Col>
                </Row>
                </Row>
            </Row>
            
        </div>
    );
}

