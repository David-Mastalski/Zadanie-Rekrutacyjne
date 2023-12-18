import { BookmarkLogo } from "../BookmarkLogo";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import styles from "./Footer.module.scss";
import "../../styles/global.scss";
import { NavItem } from "../NavItem/NavItem";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__inner} pagePadding`}>
        <div className={styles.footer__leftCol}>
          <BookmarkLogo isNavShown={true} />
          <div className={`${styles.footer__navList} list`}>
            <NavItem inFooter />
          </div>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
