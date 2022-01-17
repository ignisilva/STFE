import { ADD_TODO } from "./actions";

// state
// ['코딩', '점심 먹기']
const initState = [];

function todoApp(prevState = initState, action) {
  if (action.type === ADD_TODO) {
    return [...prevState, action.todo];
  }

  return prevState;
}
