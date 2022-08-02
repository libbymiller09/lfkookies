import { Send } from '@material-ui/icons'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styledComponents.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Description = styledComponents.div`
  font-size: 24px;
  font-wight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styledComponents.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styledComponents.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styledComponents.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Email = () => {
  return (
    <Container>
      <Title>Email List</Title>
      <Description>Sign up to receive updates on cookie drops.</Description>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Email
