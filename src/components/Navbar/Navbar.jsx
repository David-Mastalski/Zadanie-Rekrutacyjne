import closeIcon from "../../assets/icon-close.svg";
import hamburgerIcon from "../../assets/icon-hamburger.svg";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { Navlist } from "../Navlist/Navlist";
import { BookmarkLogo } from "../BookmarkLogo";

export function Navbar({ windowWidth }) {
  const [isNavShown, setIsNavShown] = useState(false);

  document.body.style.overflow = isNavShown ? "hidden" : "auto";
  document.body.style.overflow = windowWidth > 768 && "auto";

  return (
    <nav className={styles.navBar}>
      <a href="../index.html">
        <BookmarkLogo isNavShown={windowWidth < 768 && isNavShown} />
      </a>
      {isNavShown ? (
        <button
          className={styles.navButton}
          onClick={() => setIsNavShown(false)}
        >
          <img src={closeIcon} />
        </button>
      ) : (
        <button
          className={styles.navButton}
          onClick={() => setIsNavShown(true)}
        >
          <img src={hamburgerIcon} />
        </button>
      )}

      <Navlist windowWidth={windowWidth} isNavShown={isNavShown} />
    </nav>
  );
}
