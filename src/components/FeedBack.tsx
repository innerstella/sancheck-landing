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

const FeedBack = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [feedback, setFeedback] = useState("");

  const submitFeedback = () => {
    if (feedback.length > 0) {
      createDB();
      onClose();
      setFeedback("");
      toast({
        title: "피드백이 등록되었습니다.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "피드백을 작성해주세요",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const createDB = () => {
    const data = {
      feedback: feedback,
      date: new Date(),
    };
    setDoc(doc(dbService, "feedbackData", feedback), data);
  };
  return (
    <section>
      <Margin>
        <Container>
          <TextContainer>
            <p className="text-desc">
              어떤 점이 좋고 어떤 점이 별로다!
              <br />
              소중한 의견 남겨주시면 서비스 개발에 큰 힘이 됩니다!
            </p>
          </TextContainer>
          <Button onClick={onOpen}>
            <img src="/assets/email.svg" alt="email" />
            <p className="text">피드백 남기기</p>
          </Button>
        </Container>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>피드백 남기기</ModalHeader>
            <ModalBody>
              <Box>
                ‘산-책’ 서비스에 대한 의견을 자유롭게 남겨주세요.
                <br />
                <br />
                Ex. <br />
                이 서비스 잘 쓸 것 같다 / 그닥인데?
                <br />
                이 기능 좋다 / 이런 기능도 있으면 좋겠다
                <br />
                <p className="text-detail">
                  이메일 정보는 출시 알림용으로만 활용 후 폐기됩니다.
                </p>
                <input
                  className="input"
                  type="text"
                  placeholder="피드백을 작성해주세요"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
                <Button onClick={submitFeedback}>
                  <img src="/assets/email.svg" alt="email" />
                  <p className="text">피드백 작성하기</p>
                </Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Margin>
    </section>
  );
};

export default FeedBack;

export const Margin = styled.div`
  margin-top: 2rem;
`;

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
