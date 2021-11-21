import axios from "axios";

export const signIn = (credentials) => async (dispatch) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/api/user/login",
    data: credentials,
  };
  try {
    const res = await axios(options);
    dispatch({ type: "LOGIN_SUCCESS", user: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", err });
  }
};

export const signOut = () => async (dispatch) => {
  dispatch({ type: "SIGNOUT_SUCCESS" });
};
