export const session = "userSession";
export const logout = "logout";

export const sessionInfo = (token) => ({ type: session, token });
export const sessionlogout = (token) => ({ type: logout, token });

const initialState = {
  token: "",
  login: false,
};

const userSession = (state = initialState, action) => {
  switch (action.type) {
    case session:
      return {
        ...state,
        token: action.token,
        login: true,
      };
    case logout:
      return {
        ...state,
        token: action.token,
        login: false,
      };

    default:
      return state;
  }
};

export default userSession;
