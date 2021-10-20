import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        {/* <img src="#" alt="" height="25px" className={classes.image}/> */}
                        Sir Hobblefoot Furniture
                    </Typography>
                    <div className={classes.grow}/> 
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>               
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;