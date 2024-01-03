/* eslint-disable react/prop-types */
import Button from "../UI/Button";
import classes from "./Form.module.css";

export default function Form(props) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <input
          type="number"
          max={20}
          ref={props.inputRef}
          className={classes.guess}
        />
        <Button type="submit" className="btn check">
          Check!
        </Button>
      </form>
    </>
  );
}
