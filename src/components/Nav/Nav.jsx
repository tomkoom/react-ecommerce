import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

//Styles
import useStyles from './styles';

//Assets
import logo from '../../assets/logo.png';

const Nav = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    if(location.pathname === '/');

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography
                        component={Link} to="/"
                        variant="h6"
                        className={classes.title}
                        color="inherit" >
                        {/* <img
                            src={logo}
                            alt="Ecommerce"
                            height="25px"
                            className={classes.image} /> */}
                        Ecommerce
                    </Typography>
                    <div className={classes.grow} />


                    {location.pathname === '/' && (
                        <div className={classes.button}>
                        <IconButton
                            component={Link} to="/cart"
                            aria-label="Show cart items"
                            color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                    
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Nav;
