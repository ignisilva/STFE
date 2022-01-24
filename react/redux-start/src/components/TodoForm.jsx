import { useRef } from "react";

// component or present component
export const TodoForm = ({ add }) => {
  const inputRef = useRef();

  function click() {
    add(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={click}></button>
    </div>
  );
};
