import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: #888888;
  background-color: #fefae0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

function Announce() {
  return <Container>Super Deal! Free shipping on Orders overe $50 </Container>;
}

export default Announce;
