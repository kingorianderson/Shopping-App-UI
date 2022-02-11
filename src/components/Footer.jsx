import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { medium } from "../responsive";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  ${medium({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  

`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props)=> props.color}; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${ medium({ backgroundColor: "#fff8f8" })}
  ${ mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
  ${ mobile({ width: "70%" })}
`;


const Footer = () => {
  return (
  <Container>
     <Left>
         <Logo>Kings.</Logo>
         <Desc>Ecommerce is the buying and selling of goods and services over the Internet.
               It is conducted over computers, tablets, smartphones, and other smart devices.
         </Desc>
         <SocialContainer>
             <SocialIcon color="0d0d0d">
                 <Twitter/>
             </SocialIcon>

             <SocialIcon color="0d0d0d">
                 <Facebook/>
             </SocialIcon>

             <SocialIcon color="0d0d0d">
                 <Instagram/>
             </SocialIcon>
         </SocialContainer>
     </Left>
     <Center>

         <Title>Useful Links</Title>
         <List>
             <ListItem>Home</ListItem>
             <ListItem>Cart</ListItem>
             <ListItem>Man Fashion</ListItem>
             <ListItem>Woman Fashion</ListItem>
             <ListItem>Accessories</ListItem>
             <ListItem>My Account</ListItem>
             <ListItem>My Account</ListItem>
             <ListItem>Order Tracking</ListItem>
             <ListItem>Wishlist</ListItem>
             <ListItem>Terms</ListItem>
         </List>
     </Center>
     <Right>
         <Title>Contact</Title>
         <ContactItem><Room style={{marginRight:"10px"}}/>Nairobi, Kenya</ContactItem>
         <ContactItem><Phone style={{marginRight:"10px"}}/>+254 712 333 631</ContactItem>
         <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@kingori.co.ke</ContactItem>
         <Payment src="https://i.ibb.co/Njjh9rh/payment.png"/>
     </Right>
  </Container>
  );
};

export default Footer;
