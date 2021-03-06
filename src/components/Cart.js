import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Button } from 'react-bootstrap'
import CartProduct from './CartProduct'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: 'gray',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    marginLeft: '20px',
    fontSize: 20,
    textTransform: 'none',
    minWidth: 400,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: 'gray',
      opacity: 1,
    },
    '&$selected': {
      color: 'gray',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: 'gray',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  text: {
      fontSize: 40,
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: 50,
      color: 'gray'
  },
  text1: {
    fontSize: 40,
    display: 'flex',
    justifyContent: 'flex-start',
    color: 'gray'
  },
  text2: {
    fontSize: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    color: 'gray'
  },
  text3: {
    fontSize: 30,
    display: 'flex',
    justifyContent: 'flex-start',
    color: 'gray'
  },
  button: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: -20,
  }

}));

function Cart({ cart }) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const routeChange = () =>{ 
    let path = `Checkout`; 
   history.push(path);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={11} >
            <div className={classes.demo1}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label="1. Shopping Cart" />
                </AntTabs>
                <Typography className={classes.padding} />
            </div>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
            <div>
                <text className={classes.text}>Shopping Cart</text>
                <Divider />
                {cart.map((item) => (
                  <CartProduct key={item.id} item={item} />
                ))}
                <Divider />
                <br />
                <br />
                <br />
                <div className={classes.button}>
                  <br />
                  <br />
                  <br />
                  <Button onClick={routeChange} variant="danger">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checkout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="light">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cancel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                </div>
            </div>
        </Grid>
        <Grid item xs={4}>
            <div>
                <text className={classes.text1}>Summary</text>
                <br />
                <Divider /><br />
                <text className={classes.text2}>SUBTOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${totalPrice}</text><br />
                <text className={classes.text2}>SHIPPING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FREE</text><br />
                <text className={classes.text2}>TAXES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$70</text><br />
                <Divider /><br />
                <text className={classes.text2}>TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${totalPrice+70}</text>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);