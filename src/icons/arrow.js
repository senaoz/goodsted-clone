export default function Arrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      style={
        props.transform ? { transform: `rotate(${props.transform}deg)` } : {}
      }
    >
      <rect
        x="1"
        y="1"
        width="54"
        height="54"
        rx="27"
        stroke="#E76E3C"
        strokeWidth="2"
      />
      <path
        d="M32.172 26.9999L26.808 21.6359L28.222 20.2219L36 27.9999L28.222 35.7779L26.808 34.3639L32.172 28.9999H20V26.9999H32.172Z"
        fill="#E76E3C"
      />
    </svg>
  );
}
