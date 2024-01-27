import styled from "styled-components";
import { Button } from "./Submit";

const ModalMessage = () => {
  return (
    <section>
      <Box>
        어쩌고저쩌고
        <br />
        언제 정식 출시될 예정이고
        <br />
        어쩌고저쩌고
        <input
          className="input"
          type="email"
          placeholder="이메일을 입력해주세요"
        />
        <Button>
          <img src="/assets/email.svg" alt="email" />
          <p className="text">이메일 등록하기</p>
        </Button>
      </Box>
    </section>
  );
};

export default ModalMessage;

const Box = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .input {
    border: 1px solid var(--Primary);
    border-radius: 10px;
    padding: 0.5rem 1rem;
  }
`;
