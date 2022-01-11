import React from "react";

export default function FuncComponent2() {
  const [state, setState] = React.useState({ count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click</button>
    </div>
  );

  function click() {
    setState((state) => ({ count: state.count + 1 }));
  }
}
