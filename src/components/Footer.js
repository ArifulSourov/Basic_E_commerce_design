import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import image from "../assets/images/ttt.png";
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(6),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    list: {
      display: "flex",
      justifyContent: 'center',
      padding: 5
    },
    head: {
      display: "flex",
      justifyContent: "center",
    }
  }));
const list = [
    {
      name: 'Home',
    },
    {
      name: 'About',
    },
    {
      name: 'Shop',
    },
    {
      name: 'Help',
    },
    
  ];
const the_company = [
    {
      name: 'The Company',
    },
    {
      name: 'Career',
    },
    {
      name: 'Press',
    }
    
  ];
const discover = [
    {
      name: 'The Team',
    },
    {
      name: 'Our History',
    },
    {
      name: 'Brand Motto',
    }
    
  ];
const find_us_on = [
    {
      name: 'Facebook',
    },
    {
      name: 'Twitter',
    },
    {
      name: 'Instagram',
    }
    
  ];

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3} className={classes.paper}>
                    <img
                        alt=""
                        src={image}
                        width="500"
                        height="200"
                        className="d-inline-block align-top"
                    />
                    <text>1717 Harrison Road, San Francisco, CA 5548665, JSA</text>
                    
                </Grid>
                <br />
                <br />
                <Grid item xs={2} className={classes.paper}>
                    <br />
                    <h5 className={classes.head}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAIN MENU</h5>
                    <br />
                    <ul>
                      {list.map(item => (
                        <text>
                          <div className={classes.list}><Link to="/">{item.name}</Link></div>
                        </text>
                      ))}
                    </ul>
                </Grid>
                <Grid item xs={2} className={classes.paper}>
                    <br />
                    <h5 className={classes.head}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;THE COMPANY</h5>
                    <br />
                    <ul>
                      {the_company.map(item => (
                        <text>
                          <div className={classes.list}><Link to="/">{item.name}</Link></div>
                        </text>
                      ))}
                    </ul>
                </Grid>
                <Grid item xs={2} className={classes.paper}>
                    <br />
                    <h5 className={classes.head}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DISCOVERY</h5>
                    <br />
                    <ul>
                      {discover.map(item => (
                        <text>
                          <div className={classes.list}><Link to="/">{item.name}</Link></div>
                        </text>
                      ))}
                    </ul>
                </Grid>
                <Grid item xs={2} className={classes.paper}>
                    <br />
                    <h5 className={classes.head}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FIND US ON</h5>
                    <br />
                    <ul>
                      {find_us_on.map(item => (
                        <text>
                          <div className={classes.list}><Link to="/">{item.name}</Link></div>
                        </text>
                      ))}
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}
