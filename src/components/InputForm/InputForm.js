import { useState } from "react";
import "./inputForm.css";
function InputForm({ addFriend }) {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!userInput) return;
    addFriend(userInput);
    setUserInput("");
  };
  return (
    <form className="name-input-form" onSubmit={(e) => submitHandler(e)}>
      <input
        className="name-input"
        type="text"
        value={userInput}
        onChange={(e) => handleChange(e)}
        placeholder="Add your Friends name"
      ></input>
    </form>
  );
}

export default InputForm;
