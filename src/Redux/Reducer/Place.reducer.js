const { LOAD_PLACES, ADD_PLACE } = require("../ActionTypes");

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
    default:
      return state;
  }
};
module.exports = placeReducer;

/*
A process that spots out the differences between account balances.
A comparasion between two sets of records to ensure accuracy and correctness.
the process of comparing the numbers / figures in an account with another financial record to verify the balances match

******* REconciliation Types
Personal Reconciliation
  > Deals at individual level of reconciliation
  > A comparison between the credit card accounts, checkbooks and debit card receipts for reconciliation.
    Benefits.
      Error detection made by financial institution.
      provides a picture of the overall individuals spending.

Business Reconciliation
  > Deals at Business / coperate level of reconciliation
  > This type involves generally balance sheet reconciliation.
  > Done quarterly, monthly or annually depending of the choice of preference.


** Benefits
accuracy and consistency is ensured.
detect fradulent activities if any
Avoidance of account overdraft
*/
