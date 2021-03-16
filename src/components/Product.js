import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Container } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  add_to_cart, view_details
} from "../redux/shopping/shopping-action";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 40
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Product({add_to_cart, view_details, productData}) {
    const classes = useStyles();
    // const history = useHistory();
    //const routeChange = () =>{ 
        //let path = `Details`; 
       // history.push(path);
      //}
    return (
        <Container className={classes.root}>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={productData.image} />
                    </Card>
                    <Card.Text>{productData.name}</Card.Text>
                    <Card.Text>${productData.price}</Card.Text>
                    <Button style={{ marginRight: 20, paddingLeft: 20}} onClick={() => add_to_cart(productData.id)} variant="secondary">Add to cart</Button>
                    <Button style={{ marginLeft: 20, paddingRight: 20}} href="/Details" onClick={() => view_details(productData.id)} variant="primary">Details</Button>

        </Container>
    );
}
const mapDispatchToProps = (dispatch) => {
  // console.log("fff",view_details)
  return {
    add_to_cart: (id) => dispatch(add_to_cart(id)),
    // view_details: (id) => dispatch(view_details(id))

  };
};

export default connect(null, mapDispatchToProps)(Product);
