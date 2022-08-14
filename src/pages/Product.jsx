import React from 'react'
import styledComponents from 'styled-components';
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Email from "../components/Email";
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styledComponents.div``;

const Wrapper = styledComponents.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styledComponents.div`
  flex: 1;

`;

const Image = styledComponents.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const InfoContainer = styledComponents.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;

const Title = styledComponents.h1`
  font-weight: 200;
`;

const Descr = styledComponents.p`
  margin: 20px 0px;
`;

const Price = styledComponents.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styledComponents.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
  `;

const Filter = styledComponents.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styledComponents.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styledComponents.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styledComponents.option`

`;

const AddContainer = styledComponents.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;

const AmountContainer = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
`;

const Amount = styledComponents.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styledComponents.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Banner/>
      <Navbar/>
      <Wrapper>
        <ImgContainer>
          <Image src="" />
        </ImgContainer>
        <InfoContainer>
          <Title>Chocolate Chip Cookies</Title>
          <Descr>Gooey delicous choco chip cookies. List ingredients and allergy info.</Descr>
          <Price>$ 3</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Quantity</FilterTitle>
              <FilterSize>
                <FilterSizeOption>1</FilterSizeOption>
                <FilterSizeOption>6</FilterSizeOption>
                <FilterSizeOption>Dozen</FilterSizeOption>
                <FilterSizeOption>Custom</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Email/>
      <Footer/>
    </Container>
  )
}

export default Product
