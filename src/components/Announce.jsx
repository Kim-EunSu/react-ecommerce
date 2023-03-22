import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: white;
  background-color: #f28482;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

function Announce() {
  return <Container>Super Deal! Free shipping on Orders overe $50 </Container>;
}

export default Announce;
