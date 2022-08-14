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
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styledComponents.form`
  display: flex;
  flex-direction: column;
`;

const Title = styledComponents.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styledComponents.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styledComponents.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Link = styledComponents.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username"/>
          <Input placeholder="password"/>
          <Button>Login</Button>
          <Link>Forgot your password?</Link>
          <Link>Create account.</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
