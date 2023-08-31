export const session = "userSession";
export const logout = "logout";

export const sessionInfo = (token,uid) => ({ type: session, token,uid });
export const sessionlogout = (token,uid) => ({ type: logout, token,uid });

const initialState = {
  token: "",
  login: false,
  uid:""
};

const userSession = (state = initialState, action) => {
  switch (action.type) {
    case session:
      return {
        ...state,
        token: action.token,
        login: true,
        uid:action.uid
      };
    case logout:
      return {
        ...state,
        token: action.token,
        login: false,
        uid:""
      };

    default:
      return state;
  }
};

export default userSession;
