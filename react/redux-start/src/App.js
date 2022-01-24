import logo from "./logo.svg";
import "./App.css";
import { addTodo } from "./redux/actions";
import { useReduxState } from "./hooks/useReduxState";
import { useReduxDispatch } from "./hooks/useReduxDispatch";
import { TodoListContainer } from "./containers/TodoListContainer";
import { TodoFormContainer } from "./containers/TodoFormContainer";

function App() {
  const state = useReduxState();
  const dispatch = useReduxDispatch();

  function click() {
    dispatch(addTodo("todo"));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(state)}
        <button onClick={click}>추가</button>
      </header>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
}

export default App;
