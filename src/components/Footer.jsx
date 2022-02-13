import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { medium } from "../responsive";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { large } from "../responsive";

const Container = styled.div`
  
 
  ${mobile({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
  ${tablet({ marginLeft: "20px" })}
  ${medium({ marginLeft: "40px" })}
  ${large({ marginLeft: "50px" })}
  
  ${tablet({ display: "grid" })}
  ${medium({ display: "flex" })}
  ${large({ display: "flex" })}
  
`;
const Left = styled.div`
  /*flex: 1;*/
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
  ${ medium({ backgroundColor: "#fff8f8" })}
  ${ mobile({ backgroundColor: "#fff8f8" })}
  ${large({ marginLeft: "50px" })}
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
  
`;

const CenterRight = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  ${tablet({  display: "flex" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 70%;
  ${ mobile({ width: "70%" })}
  ${ tablet({ width: "90%" })}
  ${ medium({ width: "90%" })}
`;


const Footer = () => {
  return (
  <Container>
     <Left>
         <Logo>Kings.</Logo>
         <Desc>An online shop evokes the physical analogy of buying products or services at a regular "bricks-and-mortar" retailer or shopping center; the process is called business-to-consumer (B2C) online shopping. 
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
    <CenterRight>
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
     </CenterRight>
  </Container>
  );
};

export default Footer;
