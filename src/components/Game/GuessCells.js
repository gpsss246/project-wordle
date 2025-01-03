import { range } from "../../utils";

export function GuesseCells({ guess }) {
  console.log(guess);
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          key={index}
          className={guess ? `cell ${guess[index].status}` : "cell"}
        >
          {guess ? guess[index].letter : undefined}
        </span>
      ))}
    </p>
  );
}
