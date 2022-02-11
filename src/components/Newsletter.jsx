import { SendRounded } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { tablet } from "../responsive";


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
  ${mobile({ textAlign: "center" })}
  ${tablet({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
  ${tablet({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #006666;
  color: white;
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
