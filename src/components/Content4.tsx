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
            뭘 챙겨야 할 지 애매할 때,
            <br />
            백패킹 체크리스트를 통해 필요한 물품 빠짐 없이 챙기기
            <br />
            커머스와 연동을 통해 부족한 물품은 바로 주문!
          </p>
        </TextContainer>
        <Diner />
      </Container>
    </section>
  );
};

export default Content4;
