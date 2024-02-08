import styled from "styled-components";
import { Container, TextContainer } from "./Content1";
import Thumbs from "../ui/Thumbs";

const Content3 = () => {
  return (
    <section>
      <Container>
        <TextContainer>
          <p className="text-subtitle-black">
            등산•트레킹 자극 뿜뿜
            <span className="text-subtitle-point">챌린지 </span>
            참여
            <span className="text-subtitle-point">& 리워드</span>
          </p>
          <p className="text-desc">
            챌린지 참여하고 리워드 혜택 받기
            <br />
            <br />
            마이페이지에서 나의 등산/트레킹 기록 아카이빙
          </p>
        </TextContainer>
        <ImageContainer>
          <img className="img" src="/assets/level1.svg" alt="level1" />
          <img className="img" src="/assets/level2.svg" alt="level2" />
          <img className="img" src="/assets/level3.svg" alt="level3" />
        </ImageContainer>
        <Thumbs funcName="func3" />
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
