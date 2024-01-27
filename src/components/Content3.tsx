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
            챌린지 참여하고 리워드 혜택 받기
            <br />
            마이페이지에서 나의 등산/트레킹 기록 아카이빙
          </p>
        </TextContainer>
        <ImageContainer>
          <img className="img" src="/assets/level1.svg" alt="level1" />
          <img className="img" src="/assets/level2.svg" alt="level2" />
          <img className="img" src="/assets/level3.svg" alt="level3" />
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
