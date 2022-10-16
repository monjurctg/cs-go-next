import React, {useState} from "react";
import CommonBtn from "../../UI/CommonBtn";
import CheckBox from "../../UI/CustomTag/CheckBox";
import Text from "../../UI/CustomTag/Text";

function LoginDisclaimer({onNext, onCross}) {
  return (
    <div className="process-container">
      <Text fs={31} fw={400} color="#9DB4D3">
        Login disclaimer
      </Text>
      <div className="process-body">
        <div className="condition">
          <label class="checkbox-container">
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
          <p className="p">I agree that I am 18 years old.</p>
        </div>
        <div className="condition">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <p className="p">
            I have accepted the{" "}
            <span style={{color: "#FFC700"}}>Terms of Service</span> of
            company..
          </p>
        </div>
        <div className="condition">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <p className="p">
            I have accepted the{" "}
            <span style={{color: "#FFC700"}}> Terms of Service </span> of
            company..
          </p>
        </div>

        <div className="condition ">
          <div className="checkbox-container ">
            <img src="/images/triangle.png" alt="hello" />
          </div>
          <p className="p" style={{marginLeft: "0px"}}>
            The platform is not in any way associated with or endorsed by Valve
            Corporation.
          </p>
        </div>
      </div>
      <div className="process-btn">
        <CommonBtn width={110} className="btn" onClick={onNext}>
          Next
        </CommonBtn>
      </div>
    </div>
  );
}

export default LoginDisclaimer;
