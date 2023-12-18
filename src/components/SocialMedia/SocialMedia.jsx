import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import styles from "./SocialMedia.module.scss";

export function SocialMedia({ inNav }) {
  return (
    <div className={`${styles.socialMedia} ${inNav ? styles.navBar : ""}`}>
      <a>
        <img src={facebookIcon} className={styles.socialMedia__icon} />
      </a>
      <a>
        <img src={twitterIcon} />
      </a>
    </div>
  );
}
