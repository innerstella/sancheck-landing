import styled from "styled-components";
import { Container, TextContainer } from "./Content1";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import ModalMessage from "./ModalMessage";

const Submit = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section>
      <Container>
        <TextContainer>
          <p className="text-subtitle-black">대충 출시 알림 받으라는 메시지</p>
          <p className="text-desc">
            2024년 상반기에 기능을 사용해보고 싶으신가요?
          </p>
        </TextContainer>
        <Button onClick={onOpen}>
          <img src="/assets/bell-alert.svg" alt="bell-alert" />
          <p className="text">출시 알림 받기</p>
        </Button>
      </Container>
      <ImageContainer>
        <img className="img" src="/assets/mockup2.webp" alt="산책" />
      </ImageContainer>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>출시 알림 받기</ModalHeader>
          <ModalBody>
            <ModalMessage />
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
