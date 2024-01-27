import styled from "styled-components";
import { motion } from "framer-motion";
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

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <ModalCloseButton />
            <ModalBody>
              <ModalMessage />
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
