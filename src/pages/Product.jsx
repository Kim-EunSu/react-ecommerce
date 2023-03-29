// import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announce from "../components/Announce";
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
    <>
      <Announce />
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
