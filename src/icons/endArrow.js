export default function EndArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      viewBox="0 0 10 6"
      fill="none"
      style={
        props.transform ? { transform: `rotate(${props.transform}deg)` } : {}
      }
    >
      <path
        d="M5 3.81846L8.88906 0L10 1.09077L5 6L0 1.09077L1.11094 0L5 3.81846Z"
        fill="#696871"
      ></path>
    </svg>
  );
}
