import React from 'react'
import Product from './Product'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

const Products = ({products}) => {
    return (
        <Container xl={4}>
            {products.map((prod) => (
            <Row xl={4}>
                <Product key={prod.id} productData={prod} />
            </Row>
            ))}
        </Container>
    )
}

const mapStatetoProps = (state) => {
    return {
        products: state.shop.products
    }

}

export default connect(mapStatetoProps)(Products)