import React, { useEffect, useState } from "react";
import { Login } from "../Components/Login";
import { Counter } from "../Components/Counter";

export function MainLayout() {
  const [show, setShow] = useState(false);
  const logout = () => setShow(false);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  return (
    // <div className="container mt-5">
    //   {console.log("render method")}
    //   <button onClick={() => setShow(true)} className="btn btn-success">
    //     Login
    //   </button>
    //   {show && <Login logout={logout} />}
    // </div>
    <Counter />
  );
}
