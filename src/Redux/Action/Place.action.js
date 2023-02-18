import axios from "axios";
import { addAlert } from "./Alert.action";
const { LOAD_PLACES, ADD_PLACE } = require("../ActionTypes");

export const fetchPlaces = () => async (dispatch) => {
  try {
    console.log("Fetching places...");
    const res = await axios.get("http://127.0.0.1:5000/api/places");
    console.log(res.data);
    dispatch({
      type: LOAD_PLACES,
      payload: res.data.places,
    });
  } catch (error) {}
};

export const modifyPlace = (data) => async (dispatch) => {
  let res = null;
  try {
    const { description, title, address, placeImage, placeId } = data;
    const url = `http://127.0.0.1:5000/api/places/${placeId}`;
    const formBody = new FormData();
    formBody.append("description", description);
    formBody.append("title", title);
    formBody.append("address", address);
    if (placeImage) {
      formBody.append("placeImage", placeImage);
    }
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    res = await axios.put(url, formBody, config);
    if (res.status === 201) {
      dispatch(addAlert(res.data.msg, "danger"));
    } else {
      // dispatch({
      //   type: ADD_PLACE,
      //   payload: res.data.msg,
      // });
      dispatch(addAlert("Place Successfully Updated", "success"));
    }
  } catch (err) {
    dispatch(addAlert(res.data.msg, "danger"));
  }
};

export const addPlace = (data) => async (dispatch) => {
  let res = null;
  try {
    const { description, title, address, placeImage, creator } = data;
    const url = "http://127.0.0.1:5000/api/places";
    const formBody = new FormData();
    formBody.append("description", description);
    formBody.append("title", title);
    formBody.append("address", address);
    formBody.append("creator", creator);
    if (placeImage) {
      formBody.append("placeImage", placeImage);
    }
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    res = await axios.post(url, formBody, config);
    if (res.status === 201) {
      dispatch(addAlert(res.data.msg, "danger"));
    } else {
      dispatch({
        type: ADD_PLACE,
        payload: res.data.msg,
      });
      dispatch(addAlert("Place Successfully Addedd", "success"));
    }
  } catch (err) {
    dispatch(addAlert(res.data.msg, "danger"));
  }
};
