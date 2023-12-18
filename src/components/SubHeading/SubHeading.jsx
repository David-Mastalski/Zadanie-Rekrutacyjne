import styles from "./SubHeading.module.scss";
import "../../styles/global.scss";

export function SubHeading({ subheading, text }) {
  return (
    <>
      <h2 className={styles.subHeading}>{subheading}</h2>
      <p className={`${styles.subText} text`}>{text}</p>
    </>
  );
}
