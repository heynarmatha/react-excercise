import { useEffect, useState } from "react";
import  Effect from "./component/useEffect";
import Condition from "./component/condition";

function App() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("Morning");
  const [sum, setSum] = useState(0);

  // useEffect(() => {
  //   console.log("------------useEffect with no dependency---------");
  // });

  useEffect(() => {
    // console.log("*******useEffect with dependency***************");
  }, []);

  useEffect(() => {
    // console.log("*******useEffect with count***************");
    setSum(count+sum)
  }, [count,greeting]);

  return (
    <div>
      <h1>
        {greeting} - count : {count} - Sum : {sum}
      </h1>

      { count%3===0 ? <Effect/> : <Condition/>}

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setGreeting(greeting === "Morning" ? "Night" : "Morning");
        }}
      >
        Update Greeting
      </button>
    </div>
  );
}

export default App;
