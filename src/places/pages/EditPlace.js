import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PlaceForm from "../components/PlaceForm";

const EditPlace = (props) => {
  const placeId = useParams().placeId;
  let placeToEdit = props.placeState.placeList.filter((p) => {
    return p._id === placeId;
  });
  return (
    <>
      {`${placeId} This is`}
      <PlaceForm placeId={placeId} places={placeToEdit[0]} />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    placeState: state.placeReducer,
  };
};

export default connect(mapStateToProps, null)(EditPlace);
