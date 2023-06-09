import styled from "styled-components";
import { categories } from "../data";
import CategorieItem from "./CategorieItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: 0, flexDirection: "column" })}
`;

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategorieItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Categories;
