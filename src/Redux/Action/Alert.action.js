import { ADD_ALERT, REMOVE_ALERT } from "../ActionTypes";

export const addAlert = (alertMsg, alertType) => (dispatch) => {
  const alertId = Math.random().toString().split(".")[1];
  dispatch({
    type: ADD_ALERT,
    payload: { alertId, alertMsg, alertType },
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: alertId,
    });
  }, 5000);
};
