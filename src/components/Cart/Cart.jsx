import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';


const Cart = () => {
    const isEmpty = !cart.line_items.length;
    const EmptyCart = () => (
        <Typography variant="subtitle1">Cart is Empty</Typography>
    );
    const FilledCart = () => (
            <Grid container spacing={3}>
               {cart.line_items.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
               ))} 
            </Grid >
    )
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
