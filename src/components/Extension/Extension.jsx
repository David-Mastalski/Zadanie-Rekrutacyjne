import { ExtensionTile } from "../ExtensionTile/ExtensionTile";
import { SubHeading } from "../SubHeading/SubHeading";

import ChromeLogo from "../../assets/logo-chrome.svg";
import FirefixLogo from "../../assets/logo-firefox.svg";
import OperaLogo from "../../assets/logo-opera.svg";
import styles from "./Extension.module.scss";

const Extensions = [
  {
    title: "Add to Chrome",
    logo: ChromeLogo,
    minVersion: 62,
  },
  {
    title: "Add to Firefox",
    logo: FirefixLogo,
    minVersion: 55,
  },
  {
    title: "Add to Opera",
    logo: OperaLogo,
    minVersion: 46,
  },
];

export function Extension() {
  return (
    <div className={styles.extensions}>
      <SubHeading
        subheading="Download the extension"
        text="We've get more browsers on the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
      />
      <div className={styles.extensionWrapper}>
        {Extensions.map((extension, index) => (
          <ExtensionTile
            key={index}
            title={extension.title}
            logo={extension.logo}
            minVerion={extension.minVersion}
          />
        ))}
      </div>
    </div>
  );
}
