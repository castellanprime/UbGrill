import React, { Component } from "react";
const Message = ({ name, error }) => {
  return (
    <p style={{ color: "red" }}>
      <small>
        {name}:{error}
      </small>
    </p>
  );
};

export default Message;
