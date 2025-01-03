import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { GuesseCells } from "./GuessCells";

export function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <GuesseCells key={index} guess={guesses[index]} />
      ))}
    </div>
  );
}
