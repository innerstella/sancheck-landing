import Diner from "../ui/Diner";
import { Container, TextContainer } from "./Content1";

const Content4 = () => {
  return (
    <section>
      <Container>
        <TextContainer>
          <p className="text-subtitle-black">
            끝나고 뭐 먹지?
            <br />
            <span className="text-subtitle-point">맛집 추천</span>
            까지 한 번에!
          </p>
          <p className="text-desc">
            산행 마치고 든든하게 배 채울 맛집 추천!
            <br />
            막걸리 한 잔 걸치기 좋은 주막집st 식당부터
            <br />
            조용한 감성 맛집까지~
          </p>
        </TextContainer>
        <Diner />
      </Container>
    </section>
  );
};

export default Content4;
