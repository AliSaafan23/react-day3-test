import React, { useEffect, useState } from "react";
import { use } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Counter");

  useEffect(() => {
    console.log("componentDidMount conect to api");
    console.log("After return function", { count });
    return () => console.log("FrontEnd Clean Up Function", { count });
  }, [count]);
  // //   useEffect(() => {
  //     console.log("componentDidUpdate");
  //   }, [count]);

  //   useEffect(() => {
  //     console.log("componentDidUpdate Title");
  //   }, [title]);
  // useEffect(() => {
  //   console.log("componentDidUpdate Title and count");

  // }, [count, title]);
  return (
    console.log("render method Counter"),
    (
      <div className="bg-black text-white p-5">
        <h1>{title}</h1>
        <button
          className="btn btn-outline-success mx-5"
          onClick={() => setCount(count + 1)}
        >
          increase
        </button>
        <span className="mx-5 fw-bold fs-1">{count}</span>
        <button
          className="btn btn-outline-danger mx-5"
          onClick={() => setCount(count - 1)}
        >
          decrease
        </button>
        <button
          className="btn btn-outline-warning mx-5"
          onClick={() => setTitle("New Title")}
        >
          ChangeTitle
        </button>
      </div>
    )
  );
}
