import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Content1 from "./components/Content1";
import Scroll from "./components/Scroll";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
import Content5 from "./components/Content5";
import Footer from "./components/Footer";
import Submit from "./components/Submit";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Container>
        <MobileContainer>
          <Header />
          <Main />
          <Scroll />
          <ContentContainer>
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <Content5 />
            <Submit />
            <Footer />
          </ContentContainer>
        </MobileContainer>
      </Container>
    </ChakraProvider>
  );
}

export default App;

const Container = styled.div`
  background-color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const MobileContainer = styled.div`
  width: 420px;
  min-height: 100vh;
  background-color: white;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;
