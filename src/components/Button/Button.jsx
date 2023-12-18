import "../../styles/global.scss";

export function Button({ children, primaryColor, width }) {
  return (
    <button style={{ width }} className={`button button__${primaryColor}`}>
      {children}
    </button>
  );
}
