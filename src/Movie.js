import React from "react";

export default function Movie(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}
