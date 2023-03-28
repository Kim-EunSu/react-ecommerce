import { useState, useEffect } from "react";
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announce from "../components/Announce";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import ProductList from "./ProductList";

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
  /* align-items: center; */
  border: 3px solid blue;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 20px;
  border: 3px solid green;
  background-color: fefefe;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 200;
  width: 50%;
  font-size: 20px;
`;

const Image = styled.img`
  max-width: 150px;
  height: 30vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

// const ImgContainer = styled.div`
//   flex: 1;
// `;
// const Image = styled.img`
//   width: 100%;
//   height: 90vh;
//   object-fit: cover;
//   ${mobile({ height: "40vh" })}
// `;
// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
//   background-color: #fefefe;
//   ${mobile({ padding: "10px 10px" })}
// `;
// const Title = styled.h1`
//   font-weight: 200;
// `;
// const Desc = styled.p`
//   margin: 20px 0;
// `;
// const Price = styled.span`
//   font-weight: 100;
//   font-size: 40px;
//   ${mobile({ fontSize: "25px" })}
// `;

// const FilterContainer = styled.div`
//   width: 50%;
//   margin: 30px 0;
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;
// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
// `;
// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   margin: 0 5px;
//   cursor: pointer;
//   background-color: ${(props) => props.color};
// `;
// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;
// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
//   border: 1px solid rgb(132, 165, 157);
//   ${mobile({ marginBottom: "20px" })}
// `;

// const Button = styled.button`
//   padding: 15px;
//   border-radius: 5px;
//   border: 2px solid rgb(132, 165, 157);
//   background-color: white;
//   cursor: pointer;
//   font-weight: 500;

//   &:hover {
//     background-color: rgb(132, 165, 157);
//   }
// `;

function Product() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  });
  return (
    <Contaier>
      <Announce />
      <Wrapper>
        <Goods>
          {data &&
            data.map((item) => (
              <Wrap key={item.id}>
                <Title>{item.title}</Title>
                <Image src={item.image}></Image>
              </Wrap>
            ))}
        </Goods>
      </Wrapper>
      <Newsletter />
    </Contaier>
  );
}

export default Product;
