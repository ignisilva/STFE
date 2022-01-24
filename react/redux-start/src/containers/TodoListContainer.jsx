import { useSelector } from "react-redux";
import { TodoList } from "../components/TodoList";

// HOC 방식
// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };
// const mapDispatchToProps = (dispatch) => {};

// export const TodoListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

// hook 방식
// container 일: state dispatch 연결
export const TodoListContainer = () => {
  const todos = useSelector((state) => state.todos);

  return <TodoList todos={todos} />;
};
