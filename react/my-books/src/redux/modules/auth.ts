import { createActions, handleActions } from "redux-actions";

// State 형
interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

// 상태 초기값
const initState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

// prefix
const prefix = "my-books/auth";

// action 생성
export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

// reducer 생성
const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initState,
  { prefix }
);

export default reducer;

// saga 생성
// auth에서 sideEffect 생기는 로직들 다룸
export function* authSaga() {}
