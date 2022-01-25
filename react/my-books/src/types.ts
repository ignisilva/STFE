import { RouterState } from "connected-react-router";
import { Reducer } from "react";
import { AnyAction } from "redux";

export type LoginReqType = {
  email: string;
  password: string;
};

// State 형
export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

export interface RootState {
  auth: AuthState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}
