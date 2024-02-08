import styled from "styled-components";

const Main = () => {
  return (
    <article>
      <Container>
        <img className="img" src="/assets/mockup.webp" alt="산책 앱 화면" />
        <TextContainer>
          <p className="text-subtitle-black">
            나만의
            <br />
            등산•트레킹 파트너
          </p>
          <p className="text-desc">
            나만의 니즈에 맞는 등산•트레킹 코스 추천
            <br />
            <br />
            등산 전 짐 챙기기부터
            <br />
            등산 후 방문할 맛집 선정까지 한 번에
            <br />
            <br />
            2030 감성을 담은 심플하고 편리한 인터페이스
          </p>
        </TextContainer>
      </Container>
    </article>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4.1rem;
  padding-top: 5rem;
  gap: 0.5rem;

  background-color: var(--Clicked);
  height: 650px;
  padding: 0 25px;
  .img {
    width: 16rem;
    height: 21.8315rem;
    flex-shrink: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;
