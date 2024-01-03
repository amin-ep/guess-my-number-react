/* eslint-disable react/prop-types */
import classes from "./Status.module.css";

export default function Status(props) {
  return (
    <>
      <p className={classes.message}>{props.message}</p>
      <p className={classes["label-score"]}>
        💯 Score: <span className="score">{props.score}</span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{props.highScore}</span>
      </p>
    </>
  );
}
