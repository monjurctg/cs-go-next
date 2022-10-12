import React from "react";

function Market({onNext}) {
  return (
    <div>
      <h1>Market</h1>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default Market;
