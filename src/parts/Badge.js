import React from "react";

export default function Badge(props) {
  return (
    <div className="badge-work py-1 px-2 d-inline-block mr-3 mb-3">
      <p className="mb-0">{props.name}</p>
    </div>
  );
}
