import React from 'react'
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Email from '../components/Email';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <Categories/>
      <ProductList/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default Home;
