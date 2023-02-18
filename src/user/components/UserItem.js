import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import userEvent from "@testing-library/user-event";
const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} Place{props.placeCount === 1 ? "" : "s"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default UserItem;

// <UserItem
//                key={user.id}
//                id={user.id}
//                image={user.image}
//                name={user.name}
//                placeCount={user.places} />
