import styled from "styled-components";

const Main = () => {
  return (
    <article>
      <Container>
        <img className="img" src="/assets/mockup.webp" alt="산책 앱 화면" />
        <TextContainer>
          <p className="text-title">
            나만의
            <br />
            등산/트레킹 파트너
          </p>
          <p className="text-desc">
            공간 데이터를 바탕으로 어쩌고 저쩌고 공간 데이터를 바탕으로 어쩌고
            저쩌고 공간 데이터를 바탕으로 어쩌고 저쩌고
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
  height: 80vh;
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
