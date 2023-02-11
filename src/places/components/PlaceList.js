import React, { useState } from "react";
import "./PlaceList.css";

import PlaceItem from "./PlaceItem";
import DeleteModal from "./DeleteModal";
import Modal from "./Modal";
import Card from "../../shared/components/UIElements/Card";
const PlaceList = (props) => {
  const [showHide, setShowHide] = useState(true);
  const [modalState, setModalState] = useState(1);
  const [modalFlag, setModalFlag] = useState(false);
  const [coordinate, setCoordinate] = useState(false);

  const showHideModal = (inputCordinate, mState) => {
    setModalFlag(!modalFlag);
    setModalState(mState);
    setShowHide(!showHide);
    setCoordinate(inputCordinate);
  };

  if (showHide) {
    return (
      <div>
        {props.items.length === 0 ? (
          <div className="place-list center">
            <Card>
              <h2>No places Found. Maybe create one?</h2>
              <button>Share Place</button>
            </Card>
          </div>
        ) : (
          <div>
            <ul className="place-list">
              {props.items.map((place) => (
                <PlaceItem
                  onPlaceClick={showHideModal}
                  key={place.id}
                  id={place.id}
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
        <DeleteModal onShowHideModal={showHideModal} showModal={modalFlag} />
      );
    }
  }
};
export default PlaceList;
