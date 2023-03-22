import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import left from "../assets/images/left.jpg";
import styled from "styled-components";

const Conatiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
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
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  border: 3px solid red;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  border: 3px solid blue;
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
  return (
    <Conatiner>
      <Arrow direction="left">
        <KeyboardArrowLeftOutlined></KeyboardArrowLeftOutlined>
      </Arrow>
      <Wrapper>
        {/* 슬라이드 작성 */}
        <Slide>
          <ImgContainer>
            <Image src={left} />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Desc>
              Don't Compromise on Style! Get Fla 30% off for New Arrivals
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <KeyboardArrowRightOutlined></KeyboardArrowRightOutlined>
      </Arrow>
    </Conatiner>
  );
}

export default Slider;
