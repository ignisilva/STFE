export const ADD_TODO = "ADD_TOTO";

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}
