import styled from "styled-components";

const Container = styled.div`
   height: 30px;
   background-color: #006666;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 500;
`;

const Announcement = () => {
  return (
      <Container>
          Super Deal! Free Shipping on Orders Over Kes 500
      </Container>
  )
};

export default Announcement;
