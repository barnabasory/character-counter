import styles from "./FontChanger.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const FontChanger = () => {
  const [value, setValue] = useState("");
  const [fontsArray, setFontsArray] = useState([].map(item => (...fontsArray, item.isCopied: false)));

  const fetchFonts = async () => {
    try {
      // Fetch data from the URL
      const response = await axios.get(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCr1nkSWIVb-g2ppoVCEp3whtY7blQt3m8"
      );

      // Extract font data from the response
      const fontData = response.data.items.slice(0, 20);

      // Log the font data

      setFontsArray(fontData);
    } catch (error) {
      // Handle any errors that occur during fetching
      console.error("Error fetching fonts:", error);
    }
  };

  // Call the fetchFonts function
  fetchFonts();

  function clickToCopy(family) {
    setFontsArray((fonts) =>
      fonts.map((font) =>
        font.family === family ? { ...font, copied: true } : font
      )
    );

    navigator.clipboard.writeText(value);

    const clearCopy = setTimeout(() => {
      setFontsArray((fonts) =>
        fonts.map((font) =>
          font.family === family ? { ...font, copied: false } : font
        )
      );
    }, 1000);

    clearTimeout(() => {
      clearCopy();
    });
  }

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="Type in or copy and paste your text here."
          className={styles.input_field}
          value={value}
          onInput={handleChangeValue}
        />
      </div>
      <div className={styles.fonts}>
        {fontsArray?.map((font) => (
          <div className={styles.font_box} key={font.family}>
            <style>
              {`
          @font-face {
            font-family: ${font.family};
            src: url(${font.menu});
            font-weight: :100
          }
        `}
            </style>
            <span
              className={styles.font_name}
              style={{ fontFamily: font.family }}
            >
              {!value ? font.family : value}
            </span>

            <button
              className={!value ? styles.hide_button : styles.copy_font}
              onClick={() => clickToCopy(font.family)}
            >
              {font.copied ? "Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>
      <button className={styles.load_more}>Load More</button>
    </div>
  );
};

export default FontChanger;
