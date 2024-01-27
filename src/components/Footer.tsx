import styled from "styled-components";

const Footer = () => {
  return (
    <footer>
      <Container>
        <img className="logo" src="/assets/logo.svg" alt="산책" />
        <p className="text-desc">
          (주)케이그라운드
          <br />
          KGROUND inc
          <br />
          사업자 등록번호: 530-87-02908
          <br />
          대표이사: 배민서
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

const Container = styled.div`
  padding: 3rem 25px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .logo {
    width: 5.75rem;
    height: 1.4595rem;
  }
`;
