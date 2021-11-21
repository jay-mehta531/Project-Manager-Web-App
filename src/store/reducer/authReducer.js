const initState = {
  user: "",
  authError: null,
};

const authReducre = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("LogIn Success");
      return { ...state, authError: null, user: action.user };
    case "LOGIN_ERROR":
      console.log("LogIn Failed");
      return { ...state, authError: "Login Failed" };
    case "SIGNOUT_SUCCESS":
      console.log("SignOut Success");
      return { ...state, user: "" };
    default:
      return state;
  }
};

export default authReducre;
