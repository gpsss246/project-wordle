import React from "react";

export function ResultBanner(props) {
  return props.isCorrect === true ? (
    <>
      <div className="happy banner">
        <p>
          <strong>
            Congratulations! You got it in {props.numTries} tries!!!
          </strong>
        </p>
      </div>
    </>
  ) : (
    <>
      <div className="sad banner">
        <p>Sorry fam, the correct answer is {props.answer}</p>
      </div>
    </>
  );
}
