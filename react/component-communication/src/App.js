import logo from "./logo.svg";
import "./App.css";
import A from "./components/A";
import A2 from "./components/A2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <A /> {/* 상위에서 하위 컴포넌트 변경 */}
        <A2 /> {/* 하위에서 상위 컴포넌트 변경 */}
      </header>
    </div>
  );
}

export default App;
