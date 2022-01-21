import { connect } from "react-redux";
import { store } from "../redux/store";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = (dispatch) => {};

export default TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li>{todo.text}</li>;
      })}
    </ul>
  );
};
