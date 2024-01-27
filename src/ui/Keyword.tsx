import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

type Elem = {
  id: number;
  name: string;
};

type Props = {
  elem: Elem;
  animation: boolean;
};

const KeywordButton = ({ elem, animation }: Props) => {
  // animation random delay
  const min = 0.3,
    max = 0.6;
  const randomNum = Math.random() * (max - min) + min;

  if (elem.id % 2 === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: randomNum,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Button isclicked={elem.id}>
          <p className="text">{elem.name}</p>
        </Button>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: randomNum,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Button isclicked={elem.id}>
          <p className="text">{elem.name}</p>
        </Button>
      </motion.div>
    );
  }
};

export default KeywordButton;

const Button = styled.div<{ isclicked: number }>`
  border-radius: 10px;
  border: 2px solid var(--Default, #969696);
  background: ${(props) => {
    if (+props.isclicked % 2 === 0) {
      return "var(--Clicked)";
    } else if (props.color === "gray100") {
      return "#fff";
    }
  }};

  .text {
    color: #000;
    font-family: SUIT Variable;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    padding: 0.5rem 0.7rem;
  }
`;
