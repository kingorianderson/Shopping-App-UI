import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1``;
const Desc = styled.p``;
const SocialContainer = styled.div``;
const SocialIcon = styled.div``;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;


const Footer = () => {
  return 
  <Container>
     <Left>
         <Logo>Kings.</Logo>
         <Desc>Ecommerce is the buying and selling of goods and services over the Internet.
               It is conducted over computers, tablets, smartphones, and other smart devices.
         </Desc>
         <SocialContainer>
             <SocialIcon>
                 <Twitter/>
             </SocialIcon>
             <SocialIcon>
                 <Facebook/>
             </SocialIcon>
             <SocialIcon>
                 <Instagram/>
             </SocialIcon>
         </SocialContainer>
     </Left>
     <Center></Center>
     <Right></Right>
  </Container>;
};

export default Footer;
