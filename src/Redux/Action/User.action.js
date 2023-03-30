import axios from "axios";
import { ADD_USER, LOG_USERIN, LOAD_USERS, LOG_USEROUT } from "../ActionTypes";
import { addAlert } from "./Alert.action"
const URL_PREFIX = "https://place-share-m6dg.onrender.com/";

const addUser = (userDetails) => {
  return {
    type: ADD_USER,
    payload: userDetails,
  };
};
const signIn = (userDetails) => {
  return {
    type: LOG_USERIN,
    payload: userDetails,
  };
};
export const fetchUsers = () => async (dispatch) => {
  try {
    console.log("FETCHING USERS..");
    const res = await axios.get(`${URL_PREFIX}api/users`);
    console.log(res.data);
    dispatch({
      type: LOAD_USERS,
      payload: res.data.users,
    });
  } catch (error) {}
};

export const signupUser = (userDetail) => async (dispatch) => {
  try {
    console.log(userDetail);
    const { email, password, confirmPassword, profileImage, name } = userDetail;
    console.log(email);
    let res = undefined;
    if (email && password && name && password === confirmPassword) {
      const formBody = new FormData();
      formBody.append("email", email);
      formBody.append("name", name);
      formBody.append("password", password);
      formBody.append("confirmPassword", confirmPassword);
      if (profileImage) {
        formBody.append("image", userDetail.profileImage);
      }
      res = await axios.put(
        `${URL_PREFIX}api/users/signup`,
        formBody,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        dispatch(addUser(res.data.user));
      } else {
        console.log(res.data.msg);
        dispatch(addAlert(res.data.msg, "danger"));
      }
      console.log(res.status);
      return res.status;
    }
    dispatch(
      addAlert(
        "Error!. Please all fields are required. Password and ConfirmPassword must be the same",
        "danger"
      )
    );
    return "error";
  } catch (error) {
    dispatch(
      addAlert(
        "Sorry There exists an error with your data. Please all fields are required.",
        "danger"
      )
    );
    console.log(error);
    return "error";
  }
};

export const logUserIn = (userDetail) => async (dispatch) => {
  try {
    console.log("logging user in");
    console.log(userDetail);
    const { email, password } = userDetail;
    if (email && password) {
      console.log("all requirements fullfilled");

      const body = JSON.stringify({
        email,
        password,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${URL_PREFIX}api/users/login`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log(res);
      if (res.status === 200) {
        dispatch(signIn(res.data.user[0]));
      } else {
        dispatch(
          addAlert("Sorry There exists an error in your credentials", "danger")
        );
      }
      return res.status;
    }
    // console.log("Outside ifconfid...");
  } catch (error) {
    dispatch(
      addAlert("Sorry There exists an error in your credentials", "danger")
    );
  }
};
export const logUserOut = () => (dispatch) => {
  dispatch({
    type: LOG_USEROUT,
  });
};

// module.exports = {
//   signupUser,
// };
