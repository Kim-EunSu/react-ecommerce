// import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announce from "../components/Announce";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import ProductPage from "../components/ProductPage";

const Contaier = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  border: 3px solid red;
  ${mobile({ flexDirection: "column" })}
`;

const Goods = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 3px solid blue;
`;

// const Wrap = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 20%;
//   padding: 20px;
//   border: 3px solid green;
//   background-color: fefefe;
//   text-align: center;
// `;

// const Title = styled.h1`
//   font-weight: 200;
//   width: 50%;
//   font-size: 20px;
// `;

// const Image = styled.img`
//   max-width: 150px;
//   height: 30vh;
//   object-fit: contain;
//   ${mobile({ height: "40vh" })}
// `;

function Product() {
  return (
    <Contaier>
      <Announce />
      <Wrapper>
        <Goods>
          <ProductPage />
        </Goods>
      </Wrapper>
      <Newsletter />
    </Contaier>
  );
}

export default Product;
