import { useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { addTodo } from "../redux/actions";

// HOC 방식
// container or smart component
// store 와 component 이어주는 역할
// export const TodoFormContainer = connect(
//   (state) => ({}),
//   (dispatch) => ({
//     add: (text) => {
//       dispatch(addTodo(text));
//     },
//   })
// )(TodoForm);

// Hook 방식
export const TodoFormContainer = () => {
  const dispatch = useDispatch();

  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return <TodoList add={add} />;
};
