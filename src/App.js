import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [result, setResult] = useState([
    {
      id: "e1",
      text: "hi",
    },
    {
      id: "e2",
      text: "bye",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isExist, setIsExist] = useState(false);

  const inputRef = useRef();
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };
  const submitButtonHandler = (event) => {
    event.preventDefault();
    setResult([
      {
        id: Math.random().toString(),
        text: inputValue,
      },
      ...result,
    ]);
    console.log(result);
    setInputValue("");
  };
  const filtered = result.filter((item) => {
    return item.text === inputValue;
  });
  const inputBlur = (event) => {
    setIsTouched(true);
    if (filtered.length > 0) {
      setIsExist(true);
    } else {
      setIsExist(false);
    }
  };

  let content = result.map((item) => <li key={item.id}>{item.text}</li>);

  return (
    <div className="App">
      <form className="input-form" onSubmit={submitButtonHandler}>
        <input
          type="text"
          name=""
          id=""
          value={inputValue}
          onChange={inputChange}
          ref={inputRef}
          onBlur={inputBlur}
        />
        
        <button disabled={isExist}>확인</button>
      </form>
      <div className="result-box">
        <ul>{content}</ul>
      </div>
    </div>
  );
}

export default App;
