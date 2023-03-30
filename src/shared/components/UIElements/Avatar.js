import React from "react";
// import logo from "../../../../public/profile_img.png";
import "./Avatar.css";

const Avatar = (props) => {
  return (
    <>
      <div className={`avatar ${props.className}`} style={props.style}>
        <img
          src={
            props.image === "avatar"
              ? "profile_img.png"
              : `https://place-share-m6dg.onrender.com/images/usersPhoto/${props.image}`
          }
          alt={props.alt}
          style={{ width: props.width, height: props.width }}
        />
      </div>
    </>
  );
};

export default Avatar;
