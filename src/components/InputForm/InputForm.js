import React from 'react';

function InputForm() {
  const [guess, setGuess] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={evt => {
        evt.preventDefault();
        console.log(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="Must be 5 letters"
        value={guess}
        onChange={evt => setGuess(evt.target.value.toUpperCase())}
      />
    </form>
  );
}

export default InputForm;
