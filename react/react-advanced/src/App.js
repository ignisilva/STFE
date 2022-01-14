import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import Modal from "./components/Modal";
import MyInput from "./components/MyInput";

// 컴포넌트 랜더링 최적화
// const Person = React.memo(({ name, age }) => {
//   console.log("Person render");

//   return (
//     <div>
//       {name} / {age}
//     </div>
//   );
// });

// function App() {
//   const [state, setState] = React.useState({
//     text: "",
//     persons: [
//       { id: 1, name: "Mark", age: 39 },
//       { id: 2, name: "Hanna", age: 28 },
//     ],
//   });

//   const { text, persons } = state;

//   const click = React.useCallback(() => {}, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <input type="text" value={text} onChange={chanage} />
//         <ul>
//           {persons.map((person) => {
//             return <Person {...person} key={person.id} onClick={click} />;
//           })}
//         </ul>
//       </header>
//     </div>
//   );

//   function chanage(e) {
//     setState({
//       ...state,
//       text: e.target.value,
//     });
//   }
// }

// Portal
// function App() {
//   const [visible, setVisible] = useState(false);

//   const open = () => {
//     setVisible(true);
//   };

//   const close = () => {
//     setVisible(false);
//   };

//   return (
//     <div>
//       <button onClick={open}>open</button>
//       {visible && (
//         <Modal>
//           <div
//             style={{
//               width: "100vw",
//               height: "100vh",
//               background: "rgba(0,0,0,0.5)",
//             }}
//             onClick={close}
//           >
//             Hello
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

// forwardRef
function App() {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  };

  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}
export default App;
