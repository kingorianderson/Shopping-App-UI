import { SendRounded } from '@material-ui/icons';
import styled from 'styled-components';


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;


const Newsletter = () => {
  return (
      <Container>
         <Title>Newsletter</Title> 
         <Desc>Get timely updates from your favorite products.</Desc>
         <InputContainer>
            <Input placeholder='Enter your email'/>
            <Button>
                <SendRounded/>
            </Button>
         </InputContainer>
      </Container>
  )
};

export default Newsletter;
