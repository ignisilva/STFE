import { useRef } from "react";
import { connect } from "react-redux";
import { useReduxDispatch } from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

// component or present component
const TodoForm = ({ add }) => {
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

// container or smart component
// store 와 component 이어주는 역할
export default connect(
  (state) => ({}),
  (dispatch) => ({
    add: (text) => {
      dispatch(addTodo(text));
    },
  })
)(TodoForm);
