import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Newsletter from "./Newsletter";

const Container = styled.div`
  display: flex;
  padding: 100px 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 60%;
`;

const Right = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.3;
`;
const Price = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin: 30px 0;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const FilterTitle = styled.h3``;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilteerSize = styled.select`
  margin-left: 10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 30px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #b6b6b6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  width: 30%;
  padding: 15px;
  border: 1px solid #b6b6b6;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

function ProductDetail() {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <Container>
        <Left>
          <Image src={state.image}></Image>
        </Left>
        <Right>
          <Title>dd{state.title}</Title>
          <Desc>{state.description}</Desc>
          <Price>${state.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>
              <FilterColor color="pink" />
              <FilterColor color="navy" />
              <FilterColor color="black" />
            </Filter>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilteerSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilteerSize>
            </Filter>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </FilterContainer>
        </Right>
      </Container>
      <Newsletter />
    </>
  );
}

export default ProductDetail;
