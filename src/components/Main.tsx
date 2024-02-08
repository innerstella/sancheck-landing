import styled from "styled-components";

const Main = () => {
  return (
    <article>
      <Container>
        <img className="img" src="/assets/mockup.webp" alt="산책 앱 화면" />
        <TextContainer>
          <p className="text-subtitle-black text-wanju">
            나만의
            <br />
            등산<span className="text-subtitle-black">•</span>트레킹 파트너
          </p>
          <p className="text-desc">
            <span className="text-primary">나만의 니즈</span>에 맞는 등산•트레킹
            <span className="text-primary"> 코스 추천</span>
            <br />
            <br />
            등산 전 <span className="text-primary"> 짐 챙기기</span>부터
            <br />
            등산 후 방문할 <span className="text-primary"> 맛집 선정</span>까지
            한 번에
            <br />
            <br />
            <span className="text-primary">2030 감성</span>을 담은{" "}
            <span className="text-primary"> 심플하고 편리한</span> 인터페이스
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
