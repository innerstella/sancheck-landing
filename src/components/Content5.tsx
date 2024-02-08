import styled from "styled-components";
import { Container, TextContainer } from "./Content1";
import Thumbs from "../ui/Thumbs";

const Content5 = () => {
  return (
    <section>
      <Container>
        <TextContainer>
          <p className="text-subtitle-black text-wanju">
            등산 PT는 처음이지?
            <br />
            <span className="text-subtitle-point text-wanju">
              등산•트레킹 클래스
            </span>
          </p>
          <p className="text-desc">
            혼자 오르기 애매한 산,
            <br />
            프로 등산러와 함께하는 안전 보장 재미 보장 산행
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
      <Thumbs funcName="func5" />
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
