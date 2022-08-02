import React from 'react';
import styledComponents from 'styled-components';
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Email from "../components/Email";
import Footer from '../components/Footer';

const Container = styledComponents.div`

`;

const Title = styledComponents.h1`
  margin: 20px;
`;

const ProductLists = () => {
  return (
    <Container>
      <Banner/>
      <Navbar/>
      <Title>Cookies</Title>
      <ProductList/>
      <Email/>
      <Footer/>
    </Container>
  )
}

export default ProductLists
