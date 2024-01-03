import { useState, useRef, useEffect } from "react";
import Form from "./components/main/Form";
import Header from "./components/header/Header";
import Status from "./components/main/Status";

function App() {
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("Start Guessing");
  const [secretNumber, setSecretNumber] = useState();
  const [number, setNumber] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    const newSecretNumber = Math.trunc(Math.random() * 20) + 1;
    setSecretNumber(newSecretNumber);
    setNumber("?");
  }, []);

  // again
  const againBtnClickHandler = () => {
    setMessage("Start Guessing");
    setScore(20);
    const newSecretNumber = Math.trunc(Math.random() * 20) + 1;
    setSecretNumber(newSecretNumber);
    inputRef.current.value = "";
    setNumber("?");
    document.querySelector("body").style.backgroundColor = "#222";
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(score);

    const inputValue = inputRef.current.value;
    // empty input
    if (inputValue.length === 0 || inputValue == 0) {
      setMessage("No Number");
    } else {
      // high
      if (inputValue > secretNumber) {
        setMessage("Too High!");
        setScore(score - 1);
        // low
      } else if (inputValue < secretNumber) {
        setMessage("Too Low");
        setScore(score - 1);
        // Correct
      } else if (inputValue == secretNumber) {
        setScore(score);
        setMessage("Correct Guessing");
        setNumber(secretNumber);
        document.querySelector("body").style.backgroundColor = "#60b347";
        // highscore
        if (score > highScore) {
          setHighScore(score);
        }
      }
    }
    if (score === 0) {
      setMessage("You lost!");
      setScore(0);
      document.querySelector("body").style.backgroundColor = "red";
    }
  };

  useEffect(() => {
    if (score === 0) {
      setMessage("You lost!");
      document.querySelector("body").style.backgroundColor = "red";
    }
  }, [score]);
  return (
    <>
      <Header onAgain={againBtnClickHandler} number={number} />
      <main>
        <section className="left">
          <Form onSubmit={formSubmitHandler} inputRef={inputRef} />
        </section>
        <section className="right">
          <Status message={message} score={score} highScore={highScore} />
        </section>
      </main>
    </>
  );
}

export default App;
