import { Facebook, Instagram, MailOutline, Room } from '@material-ui/icons';
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
  display: flex;
`;

const Left = styledComponents.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styledComponents.h1`
`;

const Descr = styledComponents.p`
  margin: 20px 0px;
`;

const SocialContainer = styledComponents.div`
  display: flex;
`;

const SocialIcon = styledComponents.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styledComponents.div`
  flex: 1;
  padding: 20px;
`;

const Title = styledComponents.h3`
  margin-bottom: 30px;
`;

const List = styledComponents.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styledComponents.li`
  width: 50%;
  margin-bottom: 20px;
`;

const Right = styledComponents.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styledComponents.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LFKookies.logo</Logo>
        <Descr>A description of the business.</Descr>
        <SocialContainer>
          <SocialIcon color="#3b5999">
            <Facebook/>
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <MailOutline/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Shop</ListItem>
          <ListItem>My account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>
          Lawrence, Kansas.
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}}/>
          lfkcookies@gmail.com
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
