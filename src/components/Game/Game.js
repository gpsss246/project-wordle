import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { WordForm } from "./Form";
import { Guesses } from "./Guesses";
import { checkGuess } from "../../game-helpers";
import { ResultBanner } from "./ResultBanner";
import { Keyboard } from "./Keyboard";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGueses] = React.useState([]);
  const [numTries, setTries] = React.useState(0);
  const [isCorrect, setIsCorrect] = React.useState(false);

  function addGuesses(newGuess) {
    setTries(numTries + 1);
    setGueses([...guesses, checkGuess(newGuess, answer)[0]]);

    if (checkGuess(newGuess, answer)[1] === 5) {
      setIsCorrect(true);
    }
  }
  return (
    <>
      <Guesses guesses={guesses}></Guesses>
      {numTries <= 6 && isCorrect === true ? (
        <ResultBanner
          isCorrect={true}
          numTries={guesses.length}
          answer={answer}
        />
      ) : numTries === 6 && isCorrect === false ? (
        <ResultBanner
          isCorrect={false}
          numTries={guesses.length}
          answer={answer}
        />
      ) : (
        <WordForm handleSubmitDuja={addGuesses}></WordForm>
      )}
      <Keyboard guesses={guesses} />
    </>
  );
}

export default Game;
