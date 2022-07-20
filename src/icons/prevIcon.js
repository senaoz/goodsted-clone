export default function NextPrevIcon(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: props.color,
        border: "1px solid white",
        borderRadius: "50%",
        height: "65px",
        width: "65px",
        justifyContent: "center",
        left: "-25px",
        zIndex: "1",
      }}
    >
      <svg
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill={props.fill}
        width="1.5em"
        height="1.5em"
        style={
          props.transform ? { transform: `rotate(${props.transform}deg)` } : {}
        }
      >
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </svg>
    </div>
  );
}
