import React from "react";
import guess from "../../styles.css";

export function WordForm({ handleSubmitDuja }) {
  const [wordForm, setWordForm] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ wordForm });
    handleSubmitDuja(wordForm.toUpperCase());
    setWordForm("");
  }
  return (
    <>
      <form
        style={guess}
        onSubmit={handleSubmit}
        className="guess-input-wrapper"
      >
        <label htmlFor="word-input">
          Enter word case here!!
          <input
            type="text"
            id="word-input"
            value={wordForm}
            required
            minLength={5}
            maxLength={5}
            pattern="[a-zA-Z]{5}"
            title="5 letter word"
            onChange={(event) => {
              setWordForm(event.target.value.toUpperCase());
            }}
          ></input>
        </label>
      </form>
    </>
  );
}
