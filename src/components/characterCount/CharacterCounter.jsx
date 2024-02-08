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
  const [wordsPerReadingTime, setWordsPerReadingTime] = useState(0);
  const [wordsPerSpeakingTime, setWordsPerSpeakingTime] = useState(0);

  const handleTexts = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    getWordsCount(inputValue.trim());
    getCharacterCount(inputValue.trim());
    getParagraphCount(inputValue.trim());
    getSentencesCount(inputValue.trim());
    getCharacterNoSpace(inputValue.trim());
    getUniqueWords(inputValue.trim());
    getReadingTime(inputValue);
    getSpeakingTime(inputValue);
  };

  //character
  const getCharacterCount = (char) => {
    if (!char) {
      setCharacters(0);
    }

    char = char.replace(/\n/g, "");
    return setCharacters(char.trim().length);
  };

  //words
  const getWordsCount = (str) => {
    if (!str) {
      setWords(0);
    } else {
      const wordsArray = str.split(/\s+/);
      const nonEmptyWordsArray = wordsArray.filter(
        (word) => word.trim() !== ""
      );

      setWords(nonEmptyWordsArray.length);
    }

    return setWords;
  };

  //paragraph
  const getParagraphCount = (paragraph) => {
    if (!paragraph) {
      return setParagraphs(0);
    }
    return setParagraphs(paragraph.trim().split("\n\n").length - 1);
  };

  //sentences
  const getSentencesCount = (sentence) => {
    if (sentence == " ") {
      return setWords(0);
    }
    return setSentence(sentence.trim().split(".").length - 1);
  };

  //characters
  const getCharacterNoSpace = (char) => {
    return setCharNoSpace(char.trim().replace(/ /g, "").length);
  };

  //uniquewords
  const getUniqueWords = (uniqueword) => {
    if (!uniqueword) {
      setUniqueWords(0);
    }
    const set = new Set(uniqueword.split(/[ \n]+/));
    return setUniqueWords(set.size);
  };

  //reading time
  const getReadingTime = (wordPerReadingTime) => {
    if (wordPerReadingTime > 0) {
      setWordsPerReadingTime("< 1");
    }
    let wordPerMinute = 225;
    const trimmedText = wordPerReadingTime.trim().split(" ").length;
    const calculatedReadingTime = trimmedText / wordPerMinute;
    setWordsPerReadingTime(Math.floor(calculatedReadingTime));
  };

  //reading time
  const getSpeakingTime = (wordPerSpeakingTime) => {
    let wordPerMinute = 125;
    const trimmedText = wordPerSpeakingTime.trim().split(" ").length;
    const calculatedSpeakingTime = trimmedText / wordPerMinute;
    setWordsPerSpeakingTime(Math.floor(calculatedSpeakingTime));
  };
  return (
    <div className={`sw ${styles.wrapper}`}>
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

        <div className={styles.reading_speech_time}>
          <div className={styles.reading_time}>
            <span>Reading Time</span>
            <h2>{wordsPerReadingTime} Minute</h2>
          </div>
          <div className={styles.line_break}></div>
          <div className={styles.speech_time}>
            <span>Speech Time</span>
            <h2>{wordsPerSpeakingTime} Minute</h2>
          </div>
        </div>
      </div>

      <div className={styles.overview}>
        <h3>What is the Character Counter App?</h3>
        <span>
          In the digital age, where messages and content are exchanged in
          rapid-fire succession, the art of concise communication has become
          more crucial than ever. <br /> <br />{" "}
          <em>The Character Counter App</em> is a powerful tool designed to aid
          individuals, writers, and professionals in mastering the art of
          brevity while ensuring their messages remain impactful. At its core,
          the Character Counter App is a user-friendly application engineered to
          provide real-time character and word count analysis. Whether you're
          drafting an email, composing a tweet, crafting a blog post, or working
          on any form of written communication, this app serves as your vigilant
          companion, helping you stay within specified character limits.
        </span>
      </div>
    </div>
  );
};

export default CharacterCounter;
