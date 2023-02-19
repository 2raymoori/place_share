import React, { useEffect } from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
const UserPlaces = (props) => {
  const fetchPlaces = () => {
    props.placeState.filter((e) => {
      return e.user === null;
    });
  };
  const userId = useParams().userId;
  const loaded = props.placeState.placeList.filter((e) => {
    return e.user === userId;
  });
  return (
    <>
      {props.placeState.length}
      <PlaceList userId={userId} items={loaded} />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userState: state.userReducer,
    placeState: state.placeReducer,
  };
};
export default connect(mapStateToProps, null)(UserPlaces);
