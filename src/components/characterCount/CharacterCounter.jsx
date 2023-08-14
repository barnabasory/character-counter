import styles from "./CharacterCounter.module.scss";
import { useState } from "react";
const CharacterCounter = () => {
  const [value, setValue] = useState("");
  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);
  const [sentence, setSentence] = useState(0);
  const [charNoSpace, setCharNoSpace] = useState(0);
  const [uniqueWords, setUniqueWords] = useState(0);

  const handleTexts = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setCharacters(inputValue.trim().length);
    getWordsCount(inputValue.trim());
    getParagraphCount(inputValue.trim());
    getSentencesCount(inputValue.trim());
    getCharacterNoSpace(inputValue.trim());
    getUniqueWords(inputValue.trim());
  };

  const getWordsCount = (str) => {
    if (!str) {
      return setWords(0);
    }
    return setWords(str.split(" ").length + 1);
  };
  const getParagraphCount = (paragraph) => {
    if (!paragraph) {
      return setWords(0);
    }
    return setParagraphs(paragraph.trim().split("\n\n").length);
  };
  const getSentencesCount = (sentence) => {
    if (!sentence) {
      return setWords(0);
    }
    setSentence(sentence.trim().split(/[.?!]/g).filter(Boolean).length);

    // const filteredSentences = sentences.filter((sentence) => {
    //   const capFirstLetter = sentence.charAt(0);
    //   const upperCase = capFirstLetter.toUpperCase();
    //   return upperCase;
    // });
    // setSentence(filteredSentences.length);
  };
  const getCharacterNoSpace = (char) => {
    return setCharNoSpace(char.trim().replace(/ /g, "").length);
  };

  const getUniqueWords = (uniqueword) => {
    let set = new Set(uniqueword.split(" "));
    return setUniqueWords(set.size);
  };
  return (
    <div className={`sw_70 ${styles.wrapper}`}>
      <div className={styles.display_fields_upper}>
        <div className={styles.characters}>
          <span>Characters</span>
          <h2>{characters}</h2>
        </div>

        <div className={styles.words}>
          <span>Words</span>
          <h2>{words}</h2>
        </div>
        <div className={styles.paragraphs}>
          <span>Paragraphs</span>
          <h2>{paragraphs}</h2>
        </div>
        <div className={styles.sentences}>
          <span>Sentences</span>
          <h2>{sentence}</h2>
        </div>
      </div>
      <div className={styles.textarea}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Type in or copy and paste your text here"
          value={value}
          onChange={handleTexts}
        ></textarea>
      </div>
      <div className={styles.display_fields_lower}>
        <div className={styles.characters_unique_words}>
          <div className={styles.characters_without_spaces}>
            <span>Characters Without Spaces</span>
            <h2>{charNoSpace}</h2>
          </div>
          <div className={styles.line_break}></div>
          <div className={styles.unique_words}>
            <span>Unique words</span>
            <h2>{uniqueWords}</h2>
          </div>
        </div>
        <div className={styles.keywords}>
          Start typing to get a list of keywords.
        </div>
        <div className={styles.reading_speech_time}>
          <div className={styles.reading_time}>
            <span>Reading Time</span>
            <h2>0 Minute</h2>
          </div>
          <div className={styles.line_break}></div>
          <div className={styles.speech_time}>
            <span>Speech Time</span>
            <h2>0 Minute</h2>
          </div>
        </div>
      </div>

      <div className={styles.overview}>
        <h2>Guide on how to use the Character Counter</h2>
        <h2>What Is Character Count?</h2>
        <span>
          Although some think that character count is the total number of
          letters in a text, it is the total count of all characters, including
          spaces. It is mostly needed when a text or a document must stay within
          certain numbers of characters. Additionally, some translators use
          character count without spaces to determine the price of a translation
          job.
        </span>
        <h2>What Is Character Count?</h2>
        <span>
          Although some think that character count is the total number of
          letters in a text, it is the total count of all characters, including
          spaces. It is mostly needed when a text or a document must stay within
          certain numbers of characters. Additionally, some translators use
          character count without spaces to determine the price of a translation
          job.
        </span>
      </div>
    </div>
  );
};

export default CharacterCounter;
