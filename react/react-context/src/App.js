import logo from "./logo.svg";
import "./App.css";
import Consumer from "./components/Consumer";
import ContextType from "./components/ContextType";
import UseContext from "./components/UseContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Consumer />
        <ContextType />
        <UseContext />
      </header>
    </div>
  );
}

export default App;
