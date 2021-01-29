import React from 'react'
import Product from './Product'
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

const Products = ({products}) => {
    return (
        <Grid container spacing={5}>
            {products.map((prod) => (
                    <Grid key={prod.id} item>
                        <Product productData={prod} />
                    </Grid>
            ))}
        </Grid>
            
    )
}

const mapStatetoProps = (state) => {
    return {
        products: state.shop.products
    }

}

export default connect(mapStatetoProps)(Products)