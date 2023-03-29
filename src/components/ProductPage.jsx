import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: 3px solid gray;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  /* flex: 3;
  width: 50%;
  margin-bottom: 20px; */
  max-width: 150px;
  height: 30vh;
  object-fit: contain;
`;

const Title = styled.h1`
  flex: 1;
  font-size: 18px;
  text-align: center;
`;

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
            <Container>
              <Link
                to={`/product/${item.id}`}
                state={{ ...item }}
                key={item.id}
              >
                <Wrap>
                  <Image src={item.image}></Image>
                  <Title>{item.title}</Title>
                </Wrap>
              </Link>
            </Container>
          </>
        ))}
    </>
  );
}

export default ProductPage;
