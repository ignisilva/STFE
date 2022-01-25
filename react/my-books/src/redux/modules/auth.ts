import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import TokenService from "../../services/TokenService";
import UserService from "../../services/UserService";
import { AuthState, LoginReqType } from "../../types";
import { push } from "connected-react-router";

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
export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

function* loginSaga(action: Action<LoginReqType>) {
  try {
    yield put(pending());
    const token: string = yield call(UserService.login, action.payload);
    TokenService.set(token);
    yield put(success(token));
    yield put(push("/"));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data.error || "UNKNOWN_ERROR")));
  }
}

function* logoutSaga() {}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}
