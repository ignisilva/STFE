import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FuncComponent from "./components/FuncComponent";
import FuncComponent2 from "./components/FuncComponent2";
import FuncComponent3 from "./components/FuncComponent3";
import FuncComponent4 from "./components/FuncComponent4";
import FuncComponent5 from "./components/FuncComponent5";
import useWindowWidth from "./hooks/useWindowWith";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";

function App({ hasMounted }) {
  const width = useWindowWidth();

  const hasMountedFromHooks = useHasMounted();

  console.log(hasMounted, hasMountedFromHooks);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassComponent />
        <FuncComponent />
        <FuncComponent2 />
        <FuncComponent3 />
        <FuncComponent4 />
        <FuncComponent5 />
        {width};
      </header>
    </div>
  );
}

export default withHasMounted(App);
