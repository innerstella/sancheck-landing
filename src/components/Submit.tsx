import styled from "styled-components";
import { Container, TextContainer } from "./Content1";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { dbService } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import FeedBack from "./FeedBack";

const Submit = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const toast = useToast();

  const submitEmail = () => {
    if (emailRegex.test(email)) {
      createDB();
      onClose();
      setEmail("");
      toast({
        title: "이메일이 등록되었습니다.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "이메일 형식이 올바르지 않습니다.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const createDB = () => {
    const data = {
      email: email,
      date: new Date(),
    };
    setDoc(doc(dbService, "emailData", email), data);
  };
  return (
    <section>
      <Container>
        <TextContainer>
          <p className="text-subtitle-black text-wanju">
            <span className="text-subtitle-point text-wanju">산-책 </span>과
            함께
            <br />
            등산•트레킹 가고 싶다면?
          </p>
          <p className="text-desc">
            2024년 하반기 출시 예정인 ‘산-책’ <br />
            알림 받기 해두고 신규 사용자 <br />
            혜택을 누리세요!
          </p>
        </TextContainer>
        <Button onClick={onOpen} className="pointer">
          <img src="/assets/bell-alert.svg" alt="bell-alert" />
          <p className="text">출시 알림 받기</p>
        </Button>
      </Container>
      <FeedBack />
      <ImageContainer>
        <img className="img" src="/assets/mockup2.webp" alt="산책" />
      </ImageContainer>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>출시 알림 받기</ModalHeader>
          <ModalBody>
            <Box>
              2024년 상반기 출시 예정인 ‘산-책’
              <br />
              서비스의 알림 받기 해두고
              <br />
              신규 사용자 혜택을 누리세요!
              <p className="text-detail">
                이메일 정보는 출시 알림용으로만 활용 후 폐기됩니다.
              </p>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Submit;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding: 0.7rem 1rem;

  border-radius: 0.625rem;
  background: var(--Main-Color, #043927);

  .text {
    color: #fff;
    font-family: "SUIT Variable";
    font-size: 1rem;
    margin-top: 0.1rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  .img {
    width: 100%;
  }
`;

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
