import React, { useState, useContext, useEffect } from "react";
import "./PlaceList.css";

import PlaceItem from "./PlaceItem";
import DeleteModal from "./DeleteModal";
import Modal from "./Modal";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
const PlaceList = (props) => {
  const [showHide, setShowHide] = useState(true);
  const [modalState, setModalState] = useState(1);
  const [modalFlag, setModalFlag] = useState(false);
  const [coordinate, setCoordinate] = useState(false);
  const [placeToDelete, setPlaceToDelete] = useState("");

  const authContext = useContext(AuthContext);

  const showHideModal = (inputCordinate, mState, placeId = "nil") => {
    setModalFlag(!modalFlag);
    setModalState(mState);
    setShowHide(!showHide);
    setCoordinate(inputCordinate);
    setPlaceToDelete(placeId);
  };

  if (showHide) {
    return (
      <div>
        {props.items.length === 0 ? (
          <div className="place-list center">
            <Card className="noPlaceContainer">
              <h2>
                Sorry No places Found Yet.{" "}
                {authContext.isLoggedIn && "Maybe create one?"}
              </h2>
              {authContext.isLoggedIn && (
                <Button to="/places/new">Share A Place</Button>
              )}
            </Card>
          </div>
        ) : (
          <div>
            <ul className="place-list">
              {props.items.map((place) => (
                <PlaceItem
                  onPlaceClick={showHideModal}
                  key={place._id}
                  userId={props.userId}
                  id={place._id}
                  image={place.image}
                  title={place.title}
                  description={place.description}
                  address={place.address}
                  creatorId={place.creator}
                  coordinates={place.location}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  } else {
    if (modalState === 1) {
      return (
        <Modal
          onShowHideModal={showHideModal}
          showModal={modalFlag}
          location={coordinate}
        />
      );
    } else {
      return (
        <DeleteModal
          placeToDelete={placeToDelete}
          onShowHideModal={showHideModal}
          showModal={modalFlag}
        />
      );
    }
  }
};
export default PlaceList;
