import React from 'react'
import styledComponents from "styled-components"
import { mobile } from '../responsive';

const Container = styledComponents.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
`;

const Wrapper = styledComponents.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}

`;

const Form = styledComponents.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styledComponents.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styledComponents.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styledComponents.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="first name"/>
          <Input placeholder="last name"/>
          <Input placeholder="username"/>
          <Input placeholder="email"/>
          <Input placeholder="password"/>
          <Input placeholder="confirm password"/>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
