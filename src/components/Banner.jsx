import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
  height: 30px;
  background-color: pink;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Banner = () => {
  return (
    <Container>
      Free Delivery on orders over $25!
    </Container>
  )
}

export default Banner
