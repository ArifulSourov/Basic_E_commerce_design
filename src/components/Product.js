import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Container } from '@material-ui/core';
import { connect } from "react-redux";
import {
  add_to_cart,
} from "../redux/shopping/shopping-action";

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

function Product({add_to_cart, productData}) {
    const classes = useStyles();

    return (
        <Container xl={4} className={classes.root}>
                <Col sm={4}>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={productData.image} />
                        <Card.Text>{productData.name}</Card.Text>
                        <Card.Text>${productData.price}</Card.Text>
                        <Button onClick={() => add_to_cart(productData.id)} variant="secondary">Add to cart</Button>
                    </Card>
                </Col>
        </Container>
    );
}
const mapDispatchToProps = (dispatch) => {
  return {
    add_to_cart: (id) => dispatch(add_to_cart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
