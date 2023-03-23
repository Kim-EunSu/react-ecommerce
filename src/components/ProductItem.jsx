import {
  FavoriteBorderOutlined,
  SearchOffOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  border: 3px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   position: absolute;
//   background-color: bisque;
// `;

const Image = styled.img`
  height: 75%; //원래 크기의 75%
  border: 3px solid red;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transform: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

function ProductItem(props) {
  const { item } = props;

  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.img}></Image>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOffOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

export default ProductItem;
