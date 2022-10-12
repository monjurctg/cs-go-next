import React from "react";
import Text from "../../UI/CustomTag/Text";

function Market({onNext}) {
  return (
    <div className="process-container">
      <Text fs={31} fw={400} color="#9DB4D3">
        Market
      </Text>
      <div className="process-body">
        <div className="text">
          <p className="p">
            Explore and buy items that have been put on sale by other users on
            our marketplace. You can also view featured seller shops to browse
            their items. Each purchased item will be instantly added to your
            Inventory.
          </p>
        </div>
      </div>
      <div className="process-btn">
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default Market;
