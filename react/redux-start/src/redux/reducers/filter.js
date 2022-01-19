const initState = "ALL";

export function filter(prevState = initState, action) {
  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  return prevState;
}
