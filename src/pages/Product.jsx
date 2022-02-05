import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;


const Product = () => {
  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
              <ImgContainer>
              <Image src="https://i.ibb.co/ZMqVw20/Tracksuits.png"/>
              </ImgContainer>
              <InfoContainer>
                  <Title>Tracksuit</Title>
                  <Desc>Tracksuit with half zip sweatshirt and skinny sweatpants.</Desc>
            <Price>Kes 1500</Price>
              </InfoContainer>
          </Wrapper>
          <Newsletter/>
          <Footer/>
      </Container>
  )
};

export default Product;
 