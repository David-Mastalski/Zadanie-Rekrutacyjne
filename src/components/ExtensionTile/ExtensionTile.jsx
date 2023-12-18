import { Button } from "../Button/Button";
import styles from "./ExtensionTile.module.scss";

import Dots from "../../assets/bg-dots.svg";

export function ExtensionTile({ title, logo, minVerion }) {
  return (
    <div className={styles.extension}>
      <div className={`${styles.inner} ${styles.innerPadding}`}>
        <img src={logo} />
        <h4>{title}</h4>
        <p>Minimum version {minVerion}</p>
      </div>

      <img src={Dots} className={styles.dots} />

      <div className={styles.buttonContainer}>
        <Button primaryColor="blue" width={"100%"}>
          Add & Install Extension
        </Button>
      </div>
    </div>
  );
}
