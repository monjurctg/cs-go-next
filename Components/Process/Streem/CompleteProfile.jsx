import React from "react";
import CommonBtn from "../../UI/CommonBtn";
import Text from "../../UI/CustomTag/Text";

function CompleteProfile({onNext}) {
  return (
    <div className="process-container">
      <Text fs={31} fw={400} color="#9DB4D3">
        Complete your profile
      </Text>
      <div className="process-body">
        <div className="text">
          <div className="p mb-5">
            <p className="mb-4">
              To be able to receive trade offers on Dojo through Steam, you must
              enter your Trade URL. Please also make sure that Inventory privacy
              settings on your Steam account are set to Public.
            </p>
            <p className="mb-4">
              You can get your Steam Trade URL{" "}
              <span style={{color: "#FFC700"}}>here</span>
            </p>
            <p style={{color: "#9DB4D3"}}>Trade URL</p>
            <div className="mb-4 complete-input">
              <input type="text" placeholder="http://" />
            </div>
            <p>
              Optional: you need to have the{" "}
              <span style={{color: "#FFC700"}}>
                Steam Guard Mobile Authenticator
              </span>
              enabled for at least 7 days. If we send you a trade offer without
              this protection, the trade will be withheld by Steam for 15 days.
            </p>
          </div>
        </div>
      </div>
      <div className="process-btn">
        <CommonBtn width={336} className="btn" onClick={onNext}>
          Save Trade URL and go to Market
        </CommonBtn>
      </div>
    </div>
  );
}

export default CompleteProfile;
