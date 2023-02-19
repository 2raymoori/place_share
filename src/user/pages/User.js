import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlaces } from "../../Redux/Action/Place.action";
import { fetchUsers } from "../../Redux/Action/User.action";
import UsersList from "../components/UsersList";
const User = (props) => {
  useEffect(() => {
    props.loadUsers();
    props.loadPlaces();
    console.log("Sdfs USER USE EFFECT.");
  }, []);

  return (
    <div>
      <UsersList
        items={props.userState.userList ? props.userState.userList : ""}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userState: state.userReducer,
    placeState: state.placeReducer,
  };
};
const mapDispatcherToProps = (dispatcher) => {
  return {
    loadUsers: () => {
      dispatcher(fetchUsers());
    },
    loadPlaces: () => {
      dispatcher(fetchPlaces());
    },
  };
};
export default connect(mapStateToProps, mapDispatcherToProps)(User);
