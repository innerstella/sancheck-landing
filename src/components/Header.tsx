import styled from "styled-components";
import { motion } from "framer-motion";
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
import { Button } from "./Submit";
import { doc, setDoc } from "firebase/firestore";
import { dbService } from "../firebase";

const Header = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const toast = useToast();

  const submitEmail = () => {
    if (emailRegex.test(email)) {
      createDB();
      setEmail("");
      onClose();
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
    setDoc(doc(dbService, "test_2401", email), data);
  };
  return (
    <header>
      <Container>
        <img className="logo" src="/assets/logo.svg" alt="산책 로고" />
        <motion.img
          animate={{
            scale: [1, 1, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="bell"
          src="/assets/bell.svg"
          alt="출시 알림 신청하기"
          onClick={onOpen}
        />

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
      </Container>
    </header>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  background-color: white;
  width: 100%;

  position: fixed;
  top: 0;
  .logo {
    width: 5.75rem;
    height: 1.4595rem;
    padding-left: 1.25rem;
  }
  .bell {
    padding-right: 1.25rem;
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
