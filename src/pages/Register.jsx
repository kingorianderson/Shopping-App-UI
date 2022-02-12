import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { tablet } from "../responsive";
import { medium } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/bW6jMfg/stylish-woman-with-shopping-bags.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  ${tablet({ width: "50%" })}
  ${medium({ width: "55%" })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  height: 5vh;
  border: none;
  pading: 15px 20px;
  background-color: #05445E;
  color: white;
  cursor: pointer;
`;


const Register = () => {
  return (
      <Container>
          <Wrapper>
              <Title>CREATE AN ACCOUNT</Title>
              <Form>
                  <Input placeholder="name" />
                  <Input placeholder="last name" />
                  <Input placeholder="username" />
                  <Input placeholder="email" />
                  <Input placeholder="password" />
                  <Input placeholder="confirm password" />
                  <Agreement>
                      By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                  </Agreement>
                  <Button>CREATE</Button>
              </Form>
          </Wrapper>
          
      </Container>
      
  )
};

export default Register;
