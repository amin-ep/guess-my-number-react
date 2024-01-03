/* eslint-disable react/prop-types */
import Button from "../UI/Button";
import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes["header-btn-wrapper"]}>
        <Button className={classes.again} onClick={props.onAgain}>
          Again!
        </Button>
        <p className={classes.between}>(Between 1 and 20)</p>
      </div>
      <h1 className={classes.heading}>Guess My Number</h1>

      <div className={classes.number}>{props.number}</div>
    </header>
  );
}
