import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Button } from 'react-bootstrap'
import CartProduct from './CartProduct'

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
  button: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: 20
  }

}));

export default function Cart() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
            <div className={classes.demo1}>
                <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label="1. Shopping Cart" />
                </AntTabs>
                <Typography className={classes.padding} />
            </div>
        </Grid>
        <Grid item xs={8}>
            <div>
                <text className={classes.text}>Shopping Cart</text>
                <Divider />
                <CartProduct />
                <CartProduct />
                <Divider />
                <br />
                <div className={classes.button}>
                <Button variant="secondary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="light">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cancel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                </div>
            </div>
        </Grid>
        <Grid item xs={4}>
            <div>
                <text className={classes.text1}>Summary</text>
                <Divider />
                <text className={classes.text2}>Enter coupon code</text><br />
                <Divider />
                <text className={classes.text2}>SUBTOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$600</text>
                <text className={classes.text2}>SHIPPING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FREE</text>
                <text className={classes.text2}>TAXES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$70</text>
                <Divider />
                <text className={classes.text2}>TOTAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$670</text>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}