import "../../styles/global.scss";

const navItem = [
  {
    name: "Features",
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];

export function NavItem({ inFooter }) {
  return (
    <>
      {navItem.map((item, index) => (
        <div
          key={index}
          className={`listItem ${inFooter ? "listItem__footer" : ""}`}
        >
          <a href="#">{item.name}</a>
        </div>
      ))}
    </>
  );
}
