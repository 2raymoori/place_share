const {
  ADD_USER,
  LOAD_USERS,
  LOG_USERIN,
  LOG_USEROUT,
} = require("../ActionTypes");

const initState = {
  logInstatus: false,
  curUser: "",
  userList: null,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
    case LOG_USERIN:
      return {
        ...state,
        logInstatus: true,
        curUser: action.payload,
      };

    case LOAD_USERS:
      return {
        ...state,
        userList: action.payload,
      };
    case LOG_USEROUT:
      return {
        ...state,
        curUser: "",
        logInstatus: false,
      };
    default:
      return state;
  }
};

module.exports = userReducer;
