import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
  height: 60px;
`;
// Creates the setup for the navbar with 3 columns
const Wrapper = styledComponents.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styledComponents.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styledComponents.input`
  border: none;
`;

const Right = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styledComponents.h1`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const MenuItem = styledComponents.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Middle = styledComponents.div`
  flex: 1;
  text-align: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input/>
            <Search style={{color: "gray", fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Middle>
          <Logo>Logo Goes Here!</Logo>
        </Middle>
        <Right>

          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;
