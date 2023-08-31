import styles from "./CompareTexts.module.scss";
import { useState } from "react";

const CompareTexts = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [diff, setDiff] = useState("");

  const compare = (text1, text2) => {
    let set1 = new Set();
    set1.add(text1);

    let set2 = new Set();
    set2.add(set1);
  };

  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.textareas}>
        <textarea
          className={styles.number}
          placeholder="Enter Your Text"
          value={value}
          onInput={(e) => setValue(e.target.value)}
        ></textarea>
        <textarea
          className={styles.binary}
          value={result}
          onInput={(e) => setResult(e.target.value)}
          placeholder="Your result goes here"
        ></textarea>
      </div>
      <button onClick={() => compare(value, result)}>Compare Texts</button>
      <div>{diff}</div>
    </div>
  );
};

export default CompareTexts;
