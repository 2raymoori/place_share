import React, { useCallback, useContext, useEffect, useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import "../pages/NewPlace.css";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  validate,
} from "../../shared/util/validators";
import { connect } from "react-redux";
import { addPlace } from "../../Redux/Action/Place.action";
import { modifyPlace } from "../../Redux/Action/Place.action";

import { AuthContext } from "../../shared/context/auth-context";
import { Navigate, redirect } from "react-router-dom";

const PlaceForm = (props) => {
  const authContext = useContext(AuthContext);
  const [editSubmit, setEditSubmit] = useState(false); // to use this state to determin wether to redirect for after update.
  const [formState, setFormState] = useState({
    description: 0,
    title: 0,
    address: 1,
  });
  const [formData, setFormData] = useState({
    description: "",
    title: "",
    address: "",
  });

  useEffect(() => {
    if (props.places) {
      <Navigate redirect to={`/`} />;
      setFormData((p) => {
        return {
          ...p,
          description: props.places.description,
          address: props.places.address,
          title: props.places.title,
        };
      });
      console.log(props.places);
    }
  }, []);

  const setFormValidity = (inputKey, inputstate, inputVal) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [inputKey]: inputstate,
      };
    });

    setFormData((prevState) => {
      return {
        ...prevState,
        [inputKey]: inputVal,
      };
    });
  };
  const handleFileSelect = (e) => {
    setFormData({ ...formData, ["placeImage"]: e.target.files[0] });
  };
  ///// process text values upon change.
  const changeHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const processFormData = (event) => {
    event.preventDefault();
    const dataToSubmit = formData;
    if (props.placeId) {
      dataToSubmit.placeId = props.placeId;
      props.updatePlace(dataToSubmit);
      setEditSubmit(true);
    } else {
      dataToSubmit.creator = props.userState.curUser["_id"];
      props.addPlace(dataToSubmit);
      authContext.formSubmitted = 1;
      setTimeout(() => {
        authContext.formSubmitted = 0;
      }, 5000);
    }
    setFormData((prev) => {
      return {
        ...prev,
        ["description"]: "",
        ["address"]: "",
        ["title"]: "",
        ["placeImage"]: null,
      };
    });
  };

  return (
    <form
      encType="multipart/form-data"
      onSubmit={processFormData}
      className="place-form"
    >
      <div className="form-control">
        {editSubmit && (
          <Navigate redirect to={`/63eacf63a97ee8112a395990/places`} />
        )}
        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={formData.title}
          // onBlur={onTouched}
          // value={inputState.value}
          type={props.type}
          id={"title"}
          placeholder={props.placeholder}
          onChange={changeHandler}
        />
      </div>
      <div className="form-control">
        <label htmlFor="address">Address</label>
        <input
          name="address"
          value={formData.address}
          // onBlur={onTouched}
          // value={inputState.value}
          type={props.type}
          id={"address"}
          placeholder={props.placeholder}
          onChange={changeHandler}
        />
      </div>

      <div className="form-control">
        <label htmlFor="description">Add Place Image</label>
        <textarea
          name="description"
          value={formData.description}
          // onBlur={onTouched}
          // value={inputState.value}
          id={"description"}
          rows={props.rows || 3}
          onChange={changeHandler}
        />
      </div>
      <div className="form-control">
        <label htmlFor="placeImage">Add Place Image</label>
        <input
          type="file"
          id="placeImage"
          name="profileImage"
          required={!props.placeId && true}
          onChange={handleFileSelect}
        />
      </div>
      <Button>Submit Form</Button>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    userState: state.userReducer,
  };
};
const mapDispatcherToProps = (dispatcher) => {
  return {
    addPlace: (inputData) => dispatcher(addPlace(inputData)),
    updatePlace: (inputData) => dispatcher(modifyPlace(inputData)),
  };
};
export default connect(mapStateToProps, mapDispatcherToProps)(PlaceForm);
