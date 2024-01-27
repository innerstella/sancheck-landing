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
            등산/트레킹 파트너
          </p>
          <p className="text-desc">
            입맛에 맞는 등산/트레킹 장소를 찾는 사람들을 위한
            <br />
            적당히 걷고 맛있는 것도 먹는 코스 구상 중인 데이트족을 위한
            <br />
            혼자 산에 가기 망설여지는 등린이를 위한
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
  gap: 2.5rem;

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
