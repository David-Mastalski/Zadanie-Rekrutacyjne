import styles from "./Question.module.scss";
import { ArrowIcon } from "../ArrowIcon";
import { useState } from "react";

export function Question({ question, answer }) {
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  return (
    <div className={styles.itemContainer}>
      <div
        onClick={() => setIsAnswerShown((prevState) => !prevState)}
        className={styles.question}
      >
        <h5>{question}</h5>
        <button
          className={`${styles.expand} ${
            isAnswerShown ? styles.expand__active : ""
          }`}
        >
          <ArrowIcon active={isAnswerShown} />
        </button>
      </div>
      {isAnswerShown && <div className={styles.answer}>{answer}</div>}
    </div>
  );
}
