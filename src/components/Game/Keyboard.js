const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusRank(status) {
  if (status === "correct") {
    return 3;
  } else if (status === "misplaced") {
    return 2;
  } else if (status === "incorrect") {
    return 1;
  }
}

export function Keyboard({ guesses }) {
  const keyboardHash = {};
  console.log(guesses);
  console.log(guesses.flat());
  const letters = guesses.flat();
  console.log("letters", letters);
  letters.forEach((value) => {
    const letter = value.letter;
    const status = value.status;
    const curStatus = keyboardHash[letter];

    if (!curStatus) {
      keyboardHash[letter] = status;
    } else {
      if (getStatusRank(curStatus) <= getStatusRank(status)) {
        keyboardHash[letter] = status;
      } else {
        keyboardHash[letter] = curStatus;
      }
    }
  });
  return (
    <div className="keyboard">
      {rows.map((rows, index) => (
        <div className="keyboard-row" key={index}>
          {rows.map(
            (letter) => (
              console.log("hi", keyboardHash[letter]),
              (
                <div
                  key={letter}
                  className={`letter ${keyboardHash[letter] || ""}`}
                >
                  {letter}
                </div>
              )
            )
          )}
        </div>
      ))}
    </div>
  );
}
