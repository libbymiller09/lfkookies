import React from 'react'
import styledComponents from 'styled-components'
import { cookies } from '../data';
import Product from "./Product";

const Container = styledComponents.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const ProductList = () => {
  return (
    <Container>
      {cookies.map(item => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default ProductList
