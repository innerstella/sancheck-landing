import styled from "styled-components";

const dinerData = [
  {
    dinerName: "개화산장",
    dinerMenu: "오리 주물럭",
    dinerTime: "20",
    dinerAddress: "서울 강서구 개화동로 19길 6-53",
  },
  {
    dinerName: "앵글드",
    dinerMenu: "베이커리",
    dinerTime: "6",
    dinerAddress: "서울 강서구 양천로 10길 38",
  },
  {
    dinerName: "꾸이꾸이 돼지촌",
    dinerMenu: "돼지 쭈꾸미",
    dinerTime: "20",
    dinerAddress: "서울 강서구 초원로 77",
  },
];

const Diner = () => {
  return (
    <Container>
      {dinerData.map((elem) => {
        return (
          <MainWrapper>
            <div className="title-box">
              <span className="name">
                {elem.dinerName} : {elem.dinerMenu}
              </span>
              <div className="flex-row">
                <span className="time">도보 {elem.dinerTime}분</span>
              </div>
            </div>
            <p className="address">{elem.dinerAddress}</p>
          </MainWrapper>
        );
      })}
    </Container>
  );
};

export default Diner;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MainWrapper = styled.div`
  display: flex;
  padding: 0.625rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  border-radius: 0.375rem;
  border: 1px solid var(--Line, #cecece);
  background: #fff;
  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .title-box {
    display: flex;
    gap: 0.75rem;
  }

  .name {
    color: var(--Main-Color, #043927);

    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    white-space: nowrap;
  }
  .time {
    color: var(--Point-Color, #35b711);

    /* Body2 */
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem; /* 128.571% */

    white-space: nowrap;
    padding-top: 0.1rem;
  }
  .address {
    color: var(--Text-Sub, #545454);
    margin: 0;
    /* Body3 */
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 133.333% */

    white-space: nowrap;
  }
`;
