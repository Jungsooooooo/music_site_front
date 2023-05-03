import { combineReducers } from "redux";
import userSession from "./userSession";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,

  whitelist: ["userSession"],
};

const rootReducer = combineReducers({
  userSession,
});

export default persistReducer(persistConfig, rootReducer);
