import React, { useCallback, useContext, useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import "./NewPlace.css";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { connect } from "react-redux";
import { addPlace } from "../../Redux/Action/Place.action";
import { AuthContext } from "../../shared/context/auth-context";

const NewPlace = (props) => {
  const authContext = useContext(AuthContext);
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

  const processFormData = (event) => {
    event.preventDefault();
    const dataToSubmit = formData;
    dataToSubmit.creator = props.userState.curUser["_id"];
    props.addPlace(dataToSubmit);
    authContext.formSubmitted = 1;
    setTimeout(() => {
      authContext.formSubmitted = 0;
    }, 5000);
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
  const onTouched = () => {
    dispatch({ type: "TOUCH" });
    inputState.isValid
      ? props.onInput(props.id, 1, inputState.value)
      : props.onInput(props.id, 0, inputState.value);
  };
  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
    inputState.isValid
      ? props.onInput(props.id, 1, inputState.value)
      : props.onInput(props.id, 0, inputState.value);
  };
  return (
    <form
      encType="multipart/form-data"
      onSubmit={processFormData}
      className="place-form"
    >
      <input
        onBlur={onTouched}
        value={inputState.value}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={changeHandler}
      />
      <Input
        value={formData.title}
        onInput={setFormValidity}
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        onChange={setFormValidity}
        errorText="Please enter a valid Title"
      />
      <Input
        onInput={setFormValidity}
        id="address"
        element="input"
        value={formData.address}
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        onChange={setFormValidity}
        errorText="Please enter a valid Descriptoin Please Enter a valid Address"
      />
      <Input
        onInput={setFormValidity}
        value={formData.description}
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onChange={setFormValidity}
        errorText="Please enter a valid Descriptoin atleast 5 characters"
      />

      <div className="form-control">
        <label htmlFor="placeImage">Add Place Image</label>
        <input
          type="file"
          id="placeImage"
          name="profileImage"
          required
          onChange={handleFileSelect}
        />
      </div>
      <Button disabled={Object.values(formState).includes(0)}>
        Submit Form
      </Button>
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
  };
};
