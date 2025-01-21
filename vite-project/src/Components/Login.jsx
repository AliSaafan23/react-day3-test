import React, { useEffect, useState } from "react";
import { use } from "react";

export function Login({ logout }) {
  useEffect(() => {
    console.log(" Login component");
    return () => console.log("componentWillUnmount Clean Up Function");
  });
  return (
    <>
      <div className="alert alert-dark mt-5 text-center">
        <h1>User name: Ali Saafan</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          corrupti omnis itaque. Cupiditate commodi doloremque magni. Nostrum
          accusantium, sequi facilis ducimus quaerat, modi delectus ex saepe
          corrupti, reprehenderit quasi fugiat.
        </p>
        <button onClick={logout} className="btn btn-danger ">
          logout
        </button>
      </div>
    </>
  );
}
