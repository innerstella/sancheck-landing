import styled from "styled-components";
import { Container, TextContainer } from "./Content1";

const Content3 = () => {
  return (
    <section>
      <Container>
        <TextContainer>
          <p className="text-subtitle-black">
            <span className="text-subtitle-point">챌린지 참여</span>
            하고
            <br /> 리워드 받기
          </p>
          <p className="text-desc">
            뭘 챙겨야 할 지 애매할 때,
            <br />
            백패킹 체크리스트를 통해 필요한 물품 빠짐 없이 챙기기
            <br />
            커머스와 연동을 통해 부족한 물품은 바로 주문!
          </p>
        </TextContainer>
        <ImageContainer>
          <img className="img" src="/assets/level1.png" alt="level1" />
          <img className="img" src="/assets/level1.png" alt="level1" />
          <img className="img" src="/assets/level1.png" alt="level1" />
        </ImageContainer>
      </Container>
    </section>
  );
};

export default Content3;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .img {
    width: 5.0625rem;
    height: 5.125rem;
  }
`;
