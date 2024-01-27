import styled from "styled-components";

const Scroll = () => {
  return (
    <Container>
      <img
        className="scroll"
        src="/assets/arrow-down.svg"
        alt="밑으로 스크롤하기"
      />
    </Container>
  );
};

export default Scroll;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 2rem;
`;
