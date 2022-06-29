import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log("rendered!");

  const runOnlyOnce = () => {
    console.log("only once!");
  };
  useEffect(runOnlyOnce, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("Search For ", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    if (counter !== 0) {
      console.log("Counter is ", counter);
    }
  }, [counter]);
  useEffect(() => {
    if (keyword !== "" && counter !== 0) {
      console.log("keyword and counter changed!!");
    }
  }, [keyword, counter]);
  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search here"
      />
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

// 아래처럼 [] 사이에 useState의 keyword를 지정해주면 keyword가 변화할 때만 함수가 실행된다.

// useEffect(() => {
//   console.log("Search For ", keyword);
// }, [keyword]);

export default App;
