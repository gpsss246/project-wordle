import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { WordForm } from "./Form";
import { Guesses } from "./Guesses";
import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGueses] = React.useState([]);

  function addGuesses(newGuess) {
    setGueses([...guesses, checkGuess(newGuess, answer)]);
  }

  return (
    <>
      <WordForm handleSubmitDuja={addGuesses}></WordForm>
      <Guesses guesses={guesses}></Guesses>
    </>
  );
}

export default Game;
