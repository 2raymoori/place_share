const {
  LOAD_PLACES,
  ADD_PLACE,
  MODIFY_PLACE,
  DELETE_PLACE,
} = require("../ActionTypes");

const initState = {
  placeList: null,
};
const placeReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_PLACES:
      return {
        ...state,
        placeList: action.payload,
      };

    case ADD_PLACE:
      console.log("AAAA");
      console.log(action);
      return {
        ...state,
        placeList: [...state.placeList, action.payload],
        // placeList: state.placeList.push(action.payload),
      };
    case MODIFY_PLACE:
      let indexToReplace = state.placeList.findIndex(
        (e) => e._id === action.payload._id
      );
      state.placeList[indexToReplace] = action.payload;
      return {
        ...state,
      };
    case DELETE_PLACE:
      console.log("from reducer dELETE action");
      console.log(action.payload);
      state.placeList = state.placeList.filter((e) => {
        return e._id !== action.payload._id;
      });
      return {
        ...state,
      };
    default:
      return state;
  }
};
module.exports = placeReducer;
