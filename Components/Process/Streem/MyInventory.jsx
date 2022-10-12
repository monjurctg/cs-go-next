import React from "react";

function MyInventory({onNext}) {
  return (
    <div>
      <h1>MyInventory</h1>

      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default MyInventory;
