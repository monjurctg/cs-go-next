import React from "react";

function ItemOnSale({onNext}) {
  return (
    <div>
      <h1>ItemOnSale</h1>

      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default ItemOnSale;
