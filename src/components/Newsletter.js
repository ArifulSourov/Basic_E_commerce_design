import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(6),
      textAlign: 'justify',
      color: theme.palette.text.secondary,
    },
    form: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
  }));

export default function Newsletter() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} className={classes.paper}>
                    <h1>Newsletter</h1>
                    <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.......</text>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3} className={classes.form}>
                    <Form inline>
                        <FormControl type="text" placeholder="Email Address" className="mr-sm-3" />
                        <Button variant="secondary">Subscribe</Button>
                    </Form>
                </Grid>
            </Grid>
        </div>
    )
}
