import React, { useReducer } from "react";

// reducer => state를 변경하는 로직이 담겨있는 함수
const reducer = (state, action) => {
  if (action.type === "PLUS") {
    return {
      count: state.count + 1,
    };
  }
  return state;
};

// dispatch => action 객체를 넣어서 실행
// action은 객체이고 필수 property로 type을 가진다

export default function FuncComponent3() {
  // useReducer(reducer, init);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click</button>
    </div>
  );

  function click() {
    dispatch({ type: "PLUS" });
  }
}
