 
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1``;
const Top = styled.div``;
const Bottom = styled.div``;

const Cart = () => {
  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
              <Title>YOUR BAG</Title>
              <Top></Top>
              <Bottom></Bottom>
          </Wrapper>

          <Footer/>
      </Container>
  )
};

ex