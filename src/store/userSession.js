export const session = "userSession";
export const logout = "logout";

export const sessionInfo = (userId, uid, login) => ({ type: session, userId, uid, login });
export const sessionlogout = (userId, uid, login) => ({ type: logout, userId, uid, login });

const initialState = {
  id: "",
  uid: "",
  login: false,
};

const userSession = (state = initialState, action) => {
  switch (action.type) {
    case session:
      return {
        ...state,
        id: action.userId,
        uid: action.uid,
        login: true,
      };
    case logout:
      return {
        ...state,
        id: "",
        uid: "",
        login: false,
      };

    default:
      return state;
  }
};

export default userSession;
