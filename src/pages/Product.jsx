import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
  
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
 width: 50%;
 height: 100vh;
 object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div``;    
const Filter = styled.div``;  
const FilterTitle = styled.span``;  
const FilterColor = styled.div``;  
const FilterSize = styled.select``;  
const FilterSizeOption = styled.option``;  


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
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="armygreen" />
                    <FilterColor color="grey" />
                </Filter>

                <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
            </FilterContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter/>
          <Footer/>
      </Container>
  )
};

export default Product;
 