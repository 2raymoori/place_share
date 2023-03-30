import React, { useContext, useEffect } from "react";
import "./PlaceItem.css";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";
import { connect } from "react-redux";
const PlaceItem = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img
            src={`https://place-share-m6dg.onrender.com/images/placesPhoto/${props.image}`}
            alt={props.title}
          />
        </div>
        <div className="place-item__info">
          <h2>{props.title} </h2>
          <h3>{props.address} </h3>
          <p>{props.description} </p>
        </div>
        <div className="place-item__actions">
          <Button
            onClick={() => {
              props.onPlaceClick(props.coordinates, 1);
            }}
            inverse
          >
            VIEW ON MAP
          </Button>
          {authContext.isLoggedIn &&
            props.userState.curUser._id === props.userId && (
              <Button to={`/places/edit/${props.id}`}>EDIT </Button>
            )}

          {authContext.isLoggedIn &&
            props.userState.curUser._id === props.userId && (
              <Button
                onClick={() => {
                  props.onPlaceClick(props.coordinates, 0, props.id);
                }}
                danger
              >
                DELETE
              </Button>
            )}
        </div>
      </Card>
    </li>
  );
};
const mapPropsToState = (state) => {
  return {
    userState: state.userReducer,
  };
};
export default connect(mapPropsToState, null)(PlaceItem);

//63ee7405cb2008c338c74e95
