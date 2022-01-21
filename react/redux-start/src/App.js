import logo from "./logo.svg";
import "./App.css";
import { addTodo } from "./redux/actions";
import { useReduxState } from "./hooks/useReduxState";
import { useReduxDispatch } from "./hooks/useReduxDispatch";
import { TodoList } from "./components/TodoList";

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
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
