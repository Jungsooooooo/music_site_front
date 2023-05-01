export const session = "userSession";
export const logout = "logout";

export const sessionInfo = (userId, login) => ({ type: session, userId, login });
export const sessionlogout = (userId, login) => ({ type: logout, userId, login });

const initialState = {
  id: "",
  login: false,
};

const userSession = (state = initialState, action) => {
  switch (action.type) {
    case session:
      return {
        ...state,
        id: action.userId,
        login: true,
      };
    case logout:
      return {
        ...state,
        id: "",
        login: false,
      };

    default:
      return state;
  }
};

export default userSession;
