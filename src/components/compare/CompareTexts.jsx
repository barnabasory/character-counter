import styles from "./CompareTexts.module.scss";
import { useState } from "react";

const CompareTexts = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const compareTexts = () => {
    if (value === result) {
      console.log("equal");
    }
  };
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.textareas}>
        <textarea
          className={styles.number}
          placeholder="Enter Your Text"
          onInput={(e) => setValue(e.target.value)}
          value={value}
        ></textarea>
        <textarea
          className={styles.binary}
          value={result}
          onInput={(e) => setResult(e.target.result)}
          placeholder="Your result goes here"
        ></textarea>
      </div>
      <button onClick={compareTexts}>Compare Texts</button>
    </div>
  );
};

export default CompareTexts;
