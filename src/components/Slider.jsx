import { useState } from "react";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import { sliderItems } from "../data";
import styled from "styled-components";

const Conatiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #84a59d;
  border: none;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Conatiner>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlined></KeyboardArrowLeftOutlined>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {/* 슬라이드 작성 */}
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc} </Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlined></KeyboardArrowRightOutlined>
      </Arrow>
    </Conatiner>
  );
}

export default Slider;
