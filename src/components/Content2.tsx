import styled from "styled-components";
import Bubble from "../ui/Bubble";
import { Container, TextContainer } from "./Content1";
import Thumbs from "../ui/Thumbs";

const Content2 = () => {
  return (
    <section>
      <Container>
        <TextContainer>
          <p className="text-subtitle-black text-wanju">
            짐 챙기기 귀찮을 때
            <br />
            <span className="text-subtitle-point text-wanju">
              백패킹 체크리스트
            </span>
          </p>
          <p className="text-desc">
            뭘 챙겨야 할 지 애매할 때,
            <br />
            백패킹 체크리스트를 통해 필요한 물품 빠짐 없이 챙기기
            <br />
            <br />
            커머스와 연동을 통해 부족한 물품은 바로 주문!
          </p>
        </TextContainer>
        <Bubble text="🧳  등산 준비물 챙기셨나요?" />
        <CheckContainer>
          <div className="innerbox">
            <div className="list">
              <img src="/assets/check-on.svg" alt="check-on" />
              <p className="text">등산복</p>
            </div>
            <div className="list">
              <img src="/assets/check-on.svg" alt="check-on" />
              <p className="text">등산화</p>
            </div>
            <div className="list">
              <img src="/assets/check-off.svg" alt="check-off" />
              <p className="text">등산 스틱 (트레킹 폴)</p>
              <div className="pay">구매하기</div>
            </div>
            <div className="list">
              <img src="/assets/check-on.svg" alt="check-on" />
              <p className="text">아이젠</p>
            </div>
          </div>
        </CheckContainer>
        <Thumbs funcName="func2" />
      </Container>
    </section>
  );
};

export default Content2;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .innerbox {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .list {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  .pay {
    border: 1px solid var(--Alert);
    border-radius: 0.625rem;
    padding: 0.3rem 0.5rem;
    color: var(--Alert);
    font-size: 0.75rem;
  }
  .text {
    margin: 0;
  }
`;
