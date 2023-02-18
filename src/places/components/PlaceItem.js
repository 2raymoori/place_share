import React, { useContext, useEffect } from "react";
import "./PlaceItem.css";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";
const PlaceItem = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img
            src={`http://127.0.0.1:5000/images/placesPhoto/${props.image}`}
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
              // showHideModal(!modalFlag);  // taken care of
              // setModalState(1);
            }}
            inverse
          >
            VIEW ON MAP
          </Button>
          {authContext.isLoggedIn && (
            <Button to={`/places/edit/${props.id}`}>EDIT </Button>
          )}

          {authContext.isLoggedIn && (
            <Button
              onClick={() => {
                props.onPlaceClick(props.coordinates, 0);
                // showHideModal(!modalFlag);
                // setModalState(0);
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
export default PlaceItem;
