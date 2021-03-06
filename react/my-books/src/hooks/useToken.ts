import { useSelector } from "react-redux";
import { RootState } from "../types";

const useToken = () => {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  return token;
};

export default useToken;
