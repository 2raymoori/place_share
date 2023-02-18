import React from "react";
import { connect } from "react-redux";
import "./Alert.css";

const Alert = (props) => {
  return (
    <>
      <>{props.alertId}</>
      <div className={`alertContainer  ${props.alertType}`}>
        {props.alertState.map((e) => {
          return (
            <div className={`${e.alertType}`} key={e.alertId}>
              {e.alertMsg}
            </div>
          );
        })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    alertState: state.alertReducer,
  };
};
export default connect(mapStateToProps, null)(Alert);
