export const session = "userSession";

export const sessionInfo = (userId) => ({ type: session, userId });

const initialState = {
  userId: "",
};

const userSession = (state = initialState, action) => {
  switch (action.type) {
    case session:
      return {
        ...state,
        userId: action.userId,
      };

    default:
      return state;
  }
};

export default userSession;
