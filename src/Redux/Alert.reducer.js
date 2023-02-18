const { ADD_ALERT, REMOVE_ALERT } = require("./ActionTypes");

const initState = [
  // {
  //   alertId: "2130",
  //   alertMsg: "This is an error place not created",
  //   alertType: "danger",
  // },
];

const alertReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((e) => {
        return e.alertId !== action.payload;
      });
    default:
      return state;
  }
};

module.exports = alertReducer;
