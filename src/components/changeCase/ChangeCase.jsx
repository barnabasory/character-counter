import styles from "./ChangeCase.module.scss";
import headerStyles from "../header/Header.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/MenuContext";
import { useState } from "react";

const ChangeCase = () => {
  const [value, setValue] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const { colorTheme } = useContext(ThemeContext);

  const upsideDownMap = {
    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ǝ",
    f: "ɟ",
    g: "ƃ",
    h: "ɥ",
    i: "ı",
    j: "ɾ",
    k: "ʞ",
    l: "l",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",
    A: "∀",
    B: "𐐒",
    C: "Ɔ",
    D: "ᗡ",
    E: "Ǝ",
    F: "Ⅎ",
    G: "פ",
    H: "H",
    I: "I",
    J: "ſ",
    K: "ʞ",
    L: "˥",
    M: "W",
    N: "N",
    O: "O",
    P: "Ԁ",
    Q: "Ό",
    R: "ᴚ",
    S: "S",
    T: "⊥",
    U: "∩",
    V: "Λ",
    W: "M",
    X: "X",
    Y: "⅄",
    Z: "Z",
    0: "0",
    1: "Ɩ",
    2: "ᄅ",
    3: "Ɛ",
    4: "ㄣ",
    5: "ϛ",
    6: "9",
    7: "ㄥ",
    8: "8",
    9: "6",
    ".": "˙",
    ",": "'",
    "'": ",",
    '"': ",,",
    "`": ",",
    "?": "¿",
    "!": "¡",
    _: "‾",
    "(": ")",
    ")": "(",
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
    "<": ">",
    ">": "<",
    "&": "⅋",
    ";": "؛",
    "^": "v",
    v: "^",
    "/": "\\",
    "\\": "/",
    "|": "|",
    "-": "-",
    "=": "Ǝ",
    "+": "+",
    "*": "*",
    "#": "#",
    "@": "@",
    "%": "%",
    $: "$",
  };

  //cpoyToClipBoard
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);

    if (!value.trim()) {
      setIsCopied(false);
    }
  };

  setTimeout(() => {
    setIsCopied(false);
  }, 2000);

  //uppercase
  const changeToUpperCase = () => {
    setValue(value.toUpperCase());
  };
  //lowercase
  const changeToLowerCase = () => {
    setValue(value.toLowerCase());
  };

  const reverseUpsideChars = (text) => {
    let reversedText = "";
    for (let char of text) {
      if (upsideDownMap[char]) {
        // If present, append its upside-down counterpart to the reversedText
        reversedText += upsideDownMap[char];
      } else {
        // If not present, keep the character unchanged
        reversedText += char;
      }
    }
    return reversedText;
  };
  //upsideDown
  function changeUpsideDown(text) {
    const upsideDownTextArray = [];
    for (let char of text) {
      if (upsideDownMap[char]) {
        upsideDownTextArray.push(upsideDownMap[char]);
      } else {
        upsideDownTextArray.push(char);
      }
    }

    setValue(upsideDownTextArray.join(""));
  }

  //properCase
  const changeToProperCase = (text) => {
    const textArray = text.split(" ");
    const properCasedArray = textArray.map(
      (arr) => arr[0].toUpperCase() + arr.slice(1, arr.length).toLowerCase()
    );

    const joinedArray = properCasedArray.join(" ");
    setValue(joinedArray);
    reverseUpsideChars(joinedArray);
  };
  //toggleCase
  const changeToToggleCase = (text) => {
    const textArray = text.split(" ");
    const toggleCasedArray = textArray.map(
      (arr) => arr[0].toLowerCase() + arr.slice(1, arr.length).toUpperCase()
    );

    const joinedArray = toggleCasedArray.join(" ");
    setValue(joinedArray);
  };
  //reverseCase
  const changeToReverseCase = (text) => {
    const textString = text.split("").reverse().join("");
    setValue(textString);
  };
  return (
    <div
      className={`sw ${styles.wrapper} ${
        colorTheme === "theme-dark" ? styles.theme_dark : styles.theme_light
      }`}
    >
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type in or Copy and Paste your text here"
      ></textarea>

      <div className={styles.buttons}>
        <button onClick={changeToUpperCase}>UPPERCASE</button>
        <button onClick={changeToLowerCase}>lowercase</button>
        <button onClick={() => changeUpsideDown(value)}>upsideDown</button>
        <button onClick={() => changeToReverseCase(value)}>reversedCase</button>
        <button>rANDom casE</button>
        <button onClick={() => changeToProperCase(value)}>Proper Case</button>
        <button onClick={() => changeToToggleCase(value)}>tOGGLE cASE</button>
        <button className={styles.copy_btn} onClick={copyToClipBoard}>
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ChangeCase;
