import "./styles/global.scss";
import styles from "./App.module.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Button } from "./components/Button/Button";
import { Features } from "./components/Features/Features";
import { Extension } from "./components/Extension/Extension";

import HeroIllustration from "./assets/illustration-hero.svg";
import { Questions } from "./components/Questions/Questions";
import { Form } from "./components/Form/Form";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="pagePadding">
        <Navbar windowWidth={windowWidth} />
        <header className={styles.hero}>
          <div className={styles.content}>
            <h1>A Simple Bookmark Manager</h1>
            <p className="text">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className={styles.buttonsContainer}>
              <Button primaryColor="blue">Get it on Chrome</Button>
              <Button primaryColor="white">Get it on Firefox</Button>
            </div>
          </div>
          <div>
            <div className={styles.imgContainer}>
              <img src={HeroIllustration} alt="Illustration" />
              <span className={styles.illustrationShadow}></span>
            </div>
          </div>
        </header>
        <Features windowWidth={windowWidth} />
        <Extension />
        <Questions />
      </div>
      <Form />
      <Footer />
    </>
  );
}

export default App;
