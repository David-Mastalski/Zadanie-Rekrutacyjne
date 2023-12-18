import styles from "./Features.module.scss";
import "../../styles/global.scss";
import { useState } from "react";
import { Button } from "../Button/Button";
import IllustrationTabOne from "../../assets/illustration-features-tab-1.svg";
import IllustrationTabTwo from "../../assets/illustration-features-tab-2.svg";
import IllustrationTabThree from "../../assets/illustration-features-tab-3.svg";
import { SubHeading } from "../SubHeading/SubHeading";

export function Features({ windowWidth }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={styles.featuresContainer}>
      <SubHeading
        subheading="Features"
        text="Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your deviced so you can access
        them on the go."
      />
      <nav className={styles.tabNav}>
        <button
          onClick={() => setActiveTab(1)}
          className={`${styles.tabButton} ${
            activeTab === 1 ? styles.tabButton__activeTab : ""
          }`}
        >
          Simple Bookmarking
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`${styles.tabButton} ${
            activeTab === 2 ? styles.tabButton__activeTab : ""
          }`}
        >
          Speedy Searching
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`${styles.tabButton} ${
            activeTab === 3 ? styles.tabButton__activeTab : ""
          }`}
        >
          Easy Sharing
        </button>
      </nav>

      {activeTab === 1 && (
        <section className={styles.tab}>
          <div>
            <div
              className={`${styles.IllustrationTabContainer} ${styles.IllustrationTabContainer__one}`}
            >
              <img src={IllustrationTabOne} alt="Illustration Tab One" />
            </div>
          </div>
          <div className={styles.tabContent}>
            <h3>Bookmark in one click</h3>
            <p className="text">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            {windowWidth > 768 && (
              <Button primaryColor="blue">More info</Button>
            )}
          </div>
        </section>
      )}

      {activeTab === 2 && (
        <section className={styles.tab}>
          <div>
            <div
              className={`${styles.IllustrationTabContainer} ${styles.IllustrationTabContainer__two}`}
            >
              <img src={IllustrationTabTwo} alt="Illustration Tab One" />
            </div>
          </div>
          <div className={styles.tabContent}>
            <h3>Intelligent search</h3>
            <p className="text">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            {windowWidth > 768 && (
              <Button primaryColor="blue">More info</Button>
            )}
          </div>
        </section>
      )}

      {activeTab === 3 && (
        <section className={styles.tab}>
          <div>
            <div
              className={`${styles.IllustrationTabContainer} ${styles.IllustrationTabContainer__three}`}
            >
              <img src={IllustrationTabThree} alt="Illustration Tab One" />
            </div>
          </div>
          <div className={styles.tabContent}>
            <h3>Share your bookmarks</h3>
            <p className="text">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            {windowWidth > 768 && (
              <Button primaryColor="blue">More info</Button>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
