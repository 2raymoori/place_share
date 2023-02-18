import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
const UserList = (props) => {
  return (
    <>
      {props.items.length === 0 ? (
        <div className="center">
          <h2>No Users Found</h2>
        </div>
      ) : (
        <div>
          <ul className="users-list">
            {props.items.map((user) => (
              <UserItem
                key={user._id}
                id={user._id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default UserList;
