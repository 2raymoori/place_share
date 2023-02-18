const { createStore, applyMiddleware, combineReducers } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");
const alertReducer = require("./Alert.reducer");
const placeReducer = require("./Reducer/Place.reducer");
const userReducer = require("./Reducer/User.reducer");
const reducers = combineReducers({
  userReducer: userReducer,
  placeReducer: placeReducer,
  alertReducer: alertReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
module.exports = store;
