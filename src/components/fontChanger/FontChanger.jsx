import styles from "./FontChanger.module.scss";
import { useState, useEffect } from "react";

const FontChanger = () => {
  const [value, setValue] = useState("");
  const [fontsArray, setFontsArray] = useState([]);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCr1nkSWIVb-g2ppoVCEp3whtY7blQt3m8&sort=style`
    )
      .then((response) => response.json())
      .then((data) => setFontsArray(data.items));

    return () => {};
  }, []);

  const allFonts = fontsArray.map((font) => font.family);

  console.log(allFonts);

  function clickToCopy(text) {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  }

  const clearCopy = setTimeout(() => {
    setIsCopied(false);
  }, 1000);

  clearTimeout(() => {
    clearCopy();
  });

  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="Type in or copy and paste your text here."
          className={styles.input_field}
          value={value}
          onInput={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={styles.fonts}>
        {fontsArray.map((font) => (
          <div className={styles.font_box} key={font.family}>
            <span
              className={styles.font_name}
              style={{ fontFamily: `${font.family}` }}
            >
              {!value ? font.family : value}
            </span>

            <button
              className={!value ? styles.hide_button : styles.copy_font}
              onClick={() => clickToCopy(value)}
            >
              {isCopied ? "Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontChanger;
