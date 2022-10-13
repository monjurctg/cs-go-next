import React from "react";
import CommonBtn from "../../UI/CommonBtn";
import Text from "../../UI/CustomTag/Text";

function MyInventory({onNext}) {
  return (
    <div className="process-container">
      <Text fs={31} fw={400} color="#9DB4D3">
        My Inventory
      </Text>
      <div className="process-body">
        <div className="text">
          <div className="p mb-5">
            <p className="mb-4">
              {" "}
              Manage all your items in one dedicated space.
            </p>
            <p className="mb-4">
              {" "}
              <span style={{color: "#FFC700"}}>Steam Inventory</span> - these
              are items currently located on your connected Steam account. You
              can put them on sale to appear on the Market.
            </p>
            <p className="mb-4">
              <span style={{color: "#FFC700"}}>Dojo Inventory</span> - all items
              you purchased on the Market will be stored here. In addition,
              items that you remove from sale will also appear in this tab. You
              can withdraw them to your Steam account or put back on sale.
            </p>
            “New” marker on a skin card would indicate an item that has been
            purchased by you in the last 24 hours.
          </div>
        </div>
      </div>
      <div className="process-btn">
        <CommonBtn width={174} className="btn" onClick={onNext}>
          Got it, next
        </CommonBtn>
        <CommonBtn width={174} className="" onClick={onNext}>
          Skip all steps
        </CommonBtn>
      </div>
    </div>
  );
}

export default MyInventory;
