import React from "react";
import { specialChars, numbers, alpha } from "./../utils/passwordUtils.js";
import "../components/css/error-message.css";
const ErrorMessage = props => {
  let noSpecialChars = specialChars(props.field);
  let noNumbervValue = numbers(props.field);
  let noAlphaChars = alpha(props.field);
  //console.log(noSpecialChars);
  return (
    <div>
      {props.field && noSpecialChars ? (
        <span className="errors">{noSpecialChars}</span>
      ) : props.field && !noNumbervValue ? (
        <span className="errors">{noNumbervValue}</span>
      ) : props.field && !noAlphaChars ? (
        <span className="errors">{noAlphaChars}</span>
      ) : null}
    </div>
  );
};

export default ErrorMessage;
