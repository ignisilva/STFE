import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// middleware
// dispatch 전 후로, 코드를 추가 가능
// function middleware1(store) {
//   console.log("middleware1", 0);
//   return (next) => {
//     console.log("middleware1", 1, next); // next = middleware2의 action (21 line)
//     return (action) => {
//       console.log("middleware1", 2); // 1
//       const returnValue = next(action); // 21 line으로 점프
//       console.log("middleware1", 3); // 4
//       return returnValue;
//     };
//   };
// }

// function middleware2(store) {
//   console.log("middleware2", 0);
//   return (next) => {
//     console.log("middleware2", 1, next); // next = dispatch
//     return (action) => {
//       console.log("middleware2", 2); // 2
//       const returnValue = next(action); // dispatch 실행
//       console.log("middleware2", 3); // 3
//       return returnValue;
//     };
//   };
// }

export const store = createStore(
  reducer,
  //applyMiddleware(middleware1, middleware2)
  composeWithDevTools(applyMiddleware(thunk, promise))
);
