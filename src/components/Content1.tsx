import styled from "styled-components";
import Bubble from "../ui/Bubble";
import KeywordButton from "../ui/Keyword";
import keywordData from "../data/keyword.json";
import Thumbs from "../ui/Thumbs";

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
          <p className="text-subtitle-black text-wanju">
            <span className="text-subtitle-point text-wanju">
              나의 니즈에 딱 맞는
            </span>
            <br />
            등산•트레킹 장소 추천
          </p>
          <p className="text-desc">
            나만의 키워드로 갈만한 곳 추천받기
            <br />
            <br />
            신뢰도를 높여주는 공간데이터&AI 분석 기술
            <br />
            <br />
            키워드 고르기 어렵다면?
            <br />☞ 요즘 뜨는 추천 키워드로 검색하기
          </p>
        </TextContainer>
        <Bubble text="💬  어떤 여행을 하고 싶은가요?" />
        <KeywordContainer>
          {outputData.map((elem) => {
            return <KeywordButton key={elem.id} elem={elem} animation={true} />;
          })}
        </KeywordContainer>
        <Thumbs funcName="func1" />
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
