/* eslint-disable react/prop-types */
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${props.className}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
