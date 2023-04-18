export const session = "userSession";

export const sessionInfo = (userId) => ({ type: session, userId });

const initialState = {
  id: "",
};

const userSession = (state = initialState, action) => {
  switch (action.type) {
    case session:
      return {
        ...state,
        id: action.userId,
      };

    default:
      return state;
  }
};

export default userSession;
