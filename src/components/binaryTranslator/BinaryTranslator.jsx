import styles from "./BinaryTranslator.module.scss";
import { useState } from "react";

const BinaryTranslator = () => {
  const [number, setNumber] = useState("");
  const [binary, setBinary] = useState("");

  const convertNumberToBinary = (e) => {
    setNumber(e.target.value);

    const numberArray = number.split(" ");
    for (let i = 0; i < numberArray.length; i++) {
      const binaryNumber = number.toString(2);
      setBinary(binaryNumber);
    }
  };
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.textareas}>
        <textarea
          className={styles.number}
          placeholder="Enter a Number"
          onInput={convertNumberToBinary}
          value={number}
        ></textarea>
        <textarea className={styles.binary} value={binary}></textarea>
      </div>
    </div>
  );
};

export default BinaryTranslator;
