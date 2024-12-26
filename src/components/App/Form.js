import React from "react";
import guess from "../../styles.css";

export function WordForm() {
  const [wordForm, setWordForm] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ wordForm });
  }
  return (
    <>
      <form style={guess} onSubmit={handleSubmit}>
        <label htmlFor="word-input">
          Enter word case here!!
          <input
            type="text"
            id="word-input"
            value={wordForm}
            required
            pattern="[a-zA-Z]{5}"
            title="5 letter word"
            onChange={(event) => {
              setWordForm(event.target.value);
            }}
          ></input>
        </label>
      </form>
    </>
  );
}
