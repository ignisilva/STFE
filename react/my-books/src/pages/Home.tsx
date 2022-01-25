import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../types";

export default function Home() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  if (token !== null) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={click}>logout</button>
    </div>
  );

  function click() {}
}
