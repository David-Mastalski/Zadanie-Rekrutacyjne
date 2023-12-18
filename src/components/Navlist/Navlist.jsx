import { Button } from "../Button/Button";
import { NavItem } from "../NavItem/NavItem";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import "../../styles/global.scss";

export function Navlist({ isNavShown, windowWidth }) {
  return (
    <div className={`navList ${isNavShown ? "active" : ""}`}>
      <div className="list">
        <NavItem />
        <div className="listItem">
          <Button
            width="100%"
            primaryColor={windowWidth > 768 ? "red" : "mobile"}
          >
            Login
          </Button>
        </div>
      </div>

      <SocialMedia inNav={!isNavShown} />
    </div>
  );
}
