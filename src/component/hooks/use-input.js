import { useState } from "react";

function useInput(validValue) {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputValid = validValue(inputValue);

  const inValid = !inputValid && isTouched;

  function inPutChangeHandler(event) {
    setInputValue(event.target.value);
  }
  function touchedHandler() {
    setIsTouched(true);
  }
  function reset() {
    setInputValue("");
    setIsTouched(false);
  }

  return {
    inputValue,
    inputValid,
    inValid,
    inPutChangeHandler,
    touchedHandler,
    reset,
  };
}
export default useInput;
