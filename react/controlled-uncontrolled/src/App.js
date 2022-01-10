import logo from "./logo.svg";
import "./App.css";
import Controlled from "./components/Controlled";
import Uncontrolled from "./components/Uncontrolled";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Controlled />
        <Uncontrolled />
      </header>
    </div>
  );
}

export default App;
