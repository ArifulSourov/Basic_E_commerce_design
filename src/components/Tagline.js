import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      color: theme.palette.text.secondary,
    }
  }));

export default function Tagline() {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.paper}>Tagline describe your e-shop</h1>            
        </div>
    )
}
