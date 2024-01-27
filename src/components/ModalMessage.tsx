import styled from "styled-components";
import { Button } from "./Submit";
import { useState } from "react";

const ModalMessage = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const [email, setEmail] = useState("");

  const submitEmail = () => {
    if (emailRegex.test(email)) {
      alert("이메일이 등록되었습니다.");
    } else {
      alert("이메일 형식이 올바르지 않습니다.");
    }
  };
  return (
    <section>
      <Box>
        2024년 상반기 출시 예정인 ‘산-책’
        <br />
        서비스의 알림 받기 해두고
        <br />
        신규 사용자 혜택을 누리세요!
        <input
          className="input"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={submitEmail}>
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
