export function ArrowIcon({ active }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
      <path
        fill="none"
        stroke={active ? "#fa5757" : "#5267DF"}
        strokeWidth="3"
        d="M1 1l8 8 8-8"
      />
    </svg>
  );
}
