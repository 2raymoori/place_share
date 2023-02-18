import React, { useState, useContext } from "react";
import "./Auth.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import { logUserIn, signupUser } from "../../../src/Redux/Action/User.action";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { connect } from "react-redux";
const Auth = (props) => {
  const authContext = useContext(AuthContext);
  const [formState, setFormState] = useState({
    state: false,
    name: 1,
    email: 0,
    password: 0,
    confirmPassword: 1,
  });
  const [formData, setFormData] = useState({
    name: undefined,
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [profileImg, setProfileImg] = useState(null);
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

  const switchLoginSignup = () => {
    setFormState((p) => {
      return {
        ...p,
        ["state"]: !p.state,
      };
    });
    let nameStatus = "";
    let confirmPasswordStatus = "";
    if (formState.state) {
      console.log("Show signup form....");
      nameStatus = undefined;
      confirmPasswordStatus = undefined;
      setFormState((p) => {
        return {
          ...p,
          ["name"]: 1,
          ["confirmPassword"]: 1,
        };
      });
    } else {
      nameStatus = "";
      confirmPasswordStatus = "";
      setFormState((p) => {
        return {
          ...p,
          ["name"]: 0,
          ["confirmPassword"]: 0,
        };
      });
    }

    setFormData((state) => {
      return {
        ...state, //...formData,
        ["name"]: nameStatus,
      };
    });
    console.log(formState);
  };
  const handleFileSelect = (e) => {
    // console.log(evnt);
    setFormData({ ...formData, ["profileImage"]: e.target.files[0] });
    setProfileImg(e.target.files[0]);
    // console.log(e.target.files[0]);
    console.log(profileImg);
  };

  const processFormData = async (event) => {
    event.preventDefault();
    // console.log(formData);

    // console.log(formData);
    if (formData.name) {
      // user is trying to signUp / Register
      const status = await props.signupUser(formData);
      if (status === 200) {
        authContext.login();
      }
    } else {
      // user in trying to signIn
      const status = await props.logUserIn(formData);
      console.log(status);
      if (status === 200) {
        //(props.userState.logInstatus) {
        authContext.login();
      }
    }
  };
  return (
    <div className="auth-form">
      <form encType="multipart/form-data" onSubmit={processFormData}>
        {formState.state ? (
          <Input
            id="name"
            onChange={setFormValidity}
            onInput={setFormValidity}
            element="input"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid Name"
            label="Name"
          />
        ) : (
          <></>
        )}

        <Input
          id="email"
          onChange={setFormValidity}
          onInput={setFormValidity}
          element="input"
          type="email"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          errorText="Please enter a valid Email"
          label="Email"
        />

        <Input
          id="password"
          onChange={setFormValidity}
          onInput={setFormValidity}
          element="input"
          type="password"
          validators={[VALIDATOR_MINLENGTH(7)]}
          errorText="Please enter a Valid Password"
          label="Password"
        />
        {formState.state ? (
          <>
            <Input
              id="confirmPassword"
              onChange={setFormValidity}
              onInput={setFormValidity}
              element="input"
              type="password"
              validators={[VALIDATOR_MINLENGTH(7)]}
              errorText="Please enter a Valid Password"
              label="Confirm Password"
            />
            <div className="form-control ">
              <label htmlFor="pImage">Select Profile Image</label>
              <input
                id="pImage"
                type="file"
                name="profileImage"
                onChange={handleFileSelect}
              />
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="authFormButton__container">
          <Button disabled={Object.values(formState).includes(0)}>
            {formState.state ? "SignUp" : "Login"}
          </Button>
        </div>
      </form>
      <div className="authFormButton__container">
        <Button onClick={switchLoginSignup}>
          {" "}
          Switch {formState.state ? "Login" : "SignUp"}
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userState: state.userReducer,
  };
};
const mapDispatchToProps = (d) => {
  return {
    userAction: () => d(signupUser()),
  };
};

export default connect(mapStateToProps, { signupUser, logUserIn })(Auth);
