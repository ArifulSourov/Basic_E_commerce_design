import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import {
    adjust_quantity,
} from "../redux/shopping/shopping-action";

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

function CartProduct({item, adjust_quantity}) {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjust_quantity(item.id, e.target.value);
    };
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3} className={classes.paper}>
                    <img
                        alt=""
                        src={item.image}
                        width="200"
                        height="100"
                        className="d-inline-block align-top"
                    />
                </Grid>
                <Grid item xs={6} className={classes.name}>
                    <ul>
                        <text>
                          <div className={classes.name1}>{item.name}</div>
                        </text>
                        <text>
                          <div className={classes.text}>{item.description}</div>
                        </text>
                        <text>
                          <div className={classes.text}>${item.price}</div>
                        </text>
                    </ul>
                </Grid>
                <Grid item xs={3} className={classes.quantity}>
                    <text>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                    </text>
                </Grid>
            </Grid>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        adjust_quantity: (id, value) => dispatch(adjust_quantity(id, value)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(CartProduct)