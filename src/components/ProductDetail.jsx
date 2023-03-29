import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Title = styled.title``;
const Image = styled.img``;
const Desc = styled.p``;
const Price = styled.p``;

function ProductDetail() {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <Title>{state.title}</Title>
      <Image src={state.image}></Image>
      <Desc>{state.description}</Desc>
      <Price>{state.price}</Price>
    </>
  );
}

export default ProductDetail;
