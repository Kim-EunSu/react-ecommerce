import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1``;
const Image = styled.img``;

function ProductPage() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <>
      {data &&
        data.map((item) => (
          <>
            <Link to={`/product/${item.id}`} state={{ ...item }} key={item.id}>
              <Title>{item.title}</Title>
              <Image src={item.image}></Image>
            </Link>
          </>
        ))}
    </>
  );
}

export default ProductPage;
