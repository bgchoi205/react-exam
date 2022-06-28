import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("rendered!");
  const runOnlyOnce = () => {
    console.log("only once!");
  };
  useEffect(runOnlyOnce, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>click me</button>
    </div>
  );
}

// useEffect 는 매번 렌더링 될 때가 아닌 제일 처음 렌더링 될 때 한번만 실행되도록 보호해준다.
// useEffect 부분을 아래처럼 한번에 써도 된다.

// useEffect(() => {
//   console.log("only once!");
// }, []);

export default App;
