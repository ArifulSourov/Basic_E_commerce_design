import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import {
  add_to_cart, view_details
} from "../redux/shopping/shopping-action";
import image from "../assets/images/ttt.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: 100,
        padding: theme.spacing(100),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    name: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginRight: 200
        
    },
    name1: {
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: 40
    },
    text1: {
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: 20
    },
    text2: {
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: 30
    },
    quantity: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }

  }));

function ProductDetails({add_to_cart, products}) {

    const classes = useStyles();

    console.log("gg", products)

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4} className={classes.paper}>
                    <img
                        alt=""
                        src={image}
                        width="100%"
                        height="700"
                        className="d-inline-block align-top"
                    />
                </Grid>
                <Grid item xs={6} className={classes.name}>
                    <ul>
                        <br />
                        <text>
                          <div className={classes.name1}>Samsung Galaxy M02 with 108 MP Camera</div>
                        </text>
                        <br/>
                        <br/>
                        <text>
                          <div className={classes.text1}>
                            <ul>
                                <li>Spec list table will be here</li>
                                <li>Spec list table will be here</li>
                                <li>Spec list table will be here</li>
                                <li>Spec list table will be here</li>
                                <li>Spec list table will be here</li>
                                <li>Spec list table will be here</li>
                                <li>Spec list table will be here</li>
                                <li>Spec list table will be here</li>
                                <li>Spec list table will be here</li>
                                <li>Spec list table will be here</li>
                            </ul>
                          </div>
                        </text>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <text>
                          <div className={classes.text2}>$Price</div>
                        </text>
                        <br/>
                        <br/>
                        <Button style={{ marginLeft: -470, paddingLeft: 100, paddingRight: 100}} onClick={() => add_to_cart(products)} variant="danger">Add to cart</Button>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
    add_to_cart: (id) => dispatch(add_to_cart(id)),
    view_details: (id, product) => dispatch(view_details(id, product)),

  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
