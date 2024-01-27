import styled from "styled-components";
import Bubble from "../ui/Bubble";
import KeywordButton from "../ui/Keyword";
import keywordData from "../data/keyword.json";

const Content1 = () => {
  // keyword data
  const displayID = [2, 4, 5, 10, 12, 13, 14, 15];
  const outputData = Object.entries(keywordData)
    .map(([id, name]) => ({
      id: parseInt(id),
      name,
    }))
    .filter((elem) => displayID.includes(elem.id));
  return (
    <section>
      <Container>
        <TextContainer>
          <p className="text-subtitle-black">
            <span className="text-subtitle-point">사용자 맞춤형</span>
            <br />
            등산/트레킹 장소 추천
          </p>
          <p className="text-desc">
            나만의 니즈 맞춤형 등산/트레킹 정보 확인
            <br />
            공간데이터&빅데이터 분석 기반의 신뢰할만한 데이터!
            <br />
            최신 검색 수요를 반영한 키워드 업데이트!
          </p>
        </TextContainer>
        <Bubble text="💬  어떤 여행을 하고 싶은가요?" />
        <KeywordContainer>
          {outputData.map((elem) => {
            return <KeywordButton key={elem.id} elem={elem} animation={true} />;
          })}
        </KeywordContainer>
      </Container>
    </section>
  );
};

export default Content1;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
  gap: 2rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const KeywordContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  flex-wrap: wrap;
`;
