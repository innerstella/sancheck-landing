import styled from "styled-components";
import { Container, TextContainer } from "./Content1";

const Content5 = () => {
  return (
    <section>
      <Container>
        <TextContainer>
          <p className="text-subtitle-black">
            등산 리더와 함께 하는
            <br />
            <span className="text-subtitle-point">등산/트레킹 클래스</span>
          </p>
          <p className="text-desc">
            뭘 챙겨야 할 지 애매할 때,
            <br />
            백패킹 체크리스트를 통해 필요한 물품 빠짐 없이 챙기기
            <br />
            커머스와 연동을 통해 부족한 물품은 바로 주문!
          </p>
        </TextContainer>
      </Container>
      <ImageContainer>
        <div className="left">
          <img className="img1" src="/assets/class1.png" alt="class1" />
        </div>
        <div className="right">
          <img className="img2" src="/assets/class2.png" alt="class2" />
        </div>
      </ImageContainer>
    </section>
  );
};

export default Content5;

export const ImageContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  flex-wrap: wrap;
  .left {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    .img1 {
      width: 14.25rem;
      height: 9.4375rem;
      flex-shrink: 0;
    }
  }
  .right {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    .img2 {
      width: 15.1875rem;
      height: 9.1875rem;
      flex-shrink: 0;
    }
  }
`;
