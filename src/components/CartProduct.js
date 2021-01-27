import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import image from "../assets/images/ttt.png"
import NumericInput from 'react-numeric-input';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: theme.spacing(6),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    name: {
        display: 'flex',
        justifyContent: 'flex-start' 
    },
    name1: {
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: 20
    },
    text: {
        display: 'flex',
        justifyContent: 'flex-start' 
    },
    quantity: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }

  }));

export default function CartProduct() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3} className={classes.paper}>
                    <img
                        alt=""
                        src={image}
                        width="200"
                        height="100"
                        className="d-inline-block align-top"
                    />
                </Grid>
                <Grid item xs={6} className={classes.name}>
                    <ul>
                        <text>
                          <div className={classes.name1}>PRODUCT NAME</div>
                        </text>
                        <text>
                          <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </text>
                        <text>
                          <div className={classes.text}>$300</div>
                        </text>
                    </ul>
                </Grid>
                <Grid item xs={3} className={classes.quantity}>
                    <text>
                        <NumericInput min={0} max={100} value={1}/>
                    </text>
                </Grid>
            </Grid>
        </div>
    )
}
