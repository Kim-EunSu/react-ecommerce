// import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import ProductPage from "../components/ProductPage";

const Wrapper = styled.div`
  padding: 50px;
  ${mobile({ flexDirection: "column" })}
`;

const Goods = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, minmax(250px, auto));
  justify-content: center;
`;

function Product() {
  return (
    <>
      <Wrapper>
        <Goods>
          <ProductPage />
        </Goods>
      </Wrapper>
      <Newsletter />
    </>
  );
}

export default Product;
