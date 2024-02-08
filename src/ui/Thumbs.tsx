import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { dbService } from "../firebase";

interface FuncData {
  funcName: "func1" | "func2" | "func3" | "func4" | "func5";
  type: "up" | "down";
}

const Thumbs = ({
  funcName,
}: {
  funcName: "func1" | "func2" | "func3" | "func4" | "func5";
}) => {
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem(funcName);
    if (data) {
      if (data === "up") {
        setUp(true);
      }

      if (data === "down") {
        setDown(true);
      }
    }
  }, []);

  const handleThumbs = (type: "up" | "down") => {
    if (type === "up") {
      if (!up) {
        updateFuncData({ funcName: funcName, type: "up" });
      }
      setUp(true);
      setDown(false);
    } else {
      if (!down) {
        updateFuncData({ funcName: funcName, type: "down" });
      }
      setDown(true);
      setUp(false);
    }
  };

  const updateFuncData = ({ funcName, type }: FuncData) => {
    // get
    const docRef = collection(dbService, "funcData");
    getDocs(docRef).then((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        if (doc.id === funcName) {
          const prevValue = doc.data();

          if (type === "up") {
            prevValue.up += 1;
            if (prevValue.down > 0) {
              prevValue.down -= 1;
            }
          } else {
            prevValue.down += 1;
            if (prevValue.up > 0) {
              prevValue.up -= 1;
            }
          }
          if (prevValue !== undefined) {
            updateDB({ funcName, type, value: prevValue });
          }
        }
      });
    });

    // update
    const updateDB = ({ funcName, type, value }: any) => {
      setDoc(doc(dbService, "funcData", funcName), value);

      localStorage.setItem(funcName, type);
    };
  };

  return (
    <Container>
      <p>이 기능</p>
      <div className="flex-row">
        <div className="flex-col" onClick={() => handleThumbs("up")}>
          <p>좋아요</p>
          <img className="icon" src={`/assets/up-${up}.svg`} alt="좋아요" />
        </div>
        <div className="flex-col" onClick={() => handleThumbs("down")}>
          <p>별로예요</p>
          <img
            className="icon"
            src={`/assets/down-${down}.svg`}
            alt="별로예요"
          />
        </div>
      </div>
    </Container>
  );
};

export default Thumbs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  gap: 0.5rem;
  padding-top: 1rem;

  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .icon {
    width: 50px;
    height: 50px;
  }
`;
