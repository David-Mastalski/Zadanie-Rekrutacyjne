import "../../styles/global.scss";
import styles from "./Form.module.scss";
import ErrorIcon from "../../assets/icon-error.svg";
import { Button } from "../Button/Button";
import { useState } from "react";
import { CountDown } from "../CountDown";

export function Form() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (inputValue === "") {
      setErrorMessage(
        "Whoops, looks like you didn't provide your email address"
      );
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
      setErrorMessage("Whoops, make sure it's a email");
    } else {
      alert("Wysłano");
      setErrorMessage(null);
      setInputValue("");
    }
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={`${styles.form} pagePadding`}>
        <p className={styles.joindedUsers}>
          <CountDown />+ already joined
        </p>
        <h6>Stay-up-to-date with what we&apos;re doing</h6>

        <div className={styles.form__inner}>
          <div
            className={`${styles.inputContainer} ${
              errorMessage ? styles.error : ""
            }`}
          >
            <div className={styles.inputContainer__field}>
              <input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setErrorMessage(null);
                }}
                type="text"
                placeholder="Enter your email address"
              />
              {errorMessage && <img src={ErrorIcon} />}
            </div>
            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}
          </div>
          <Button primaryColor="red" width="100%">
            Contact Us
          </Button>
        </div>
      </form>
    </div>
  );
}
