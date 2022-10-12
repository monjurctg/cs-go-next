import React from "react";
import Text from "../../UI/CustomTag/Text";

function LoginDisclaimer({onNext}) {
  return (
    <div className="process-container">
      <Text fs={31} fw={400} color="#9DB4D3">
        Login disclaimer
      </Text>
      <div className="process-body">
        <div className="condition">
          <input type="checkbox" name="" id="" />
          <p className="p">I agree that I am 18 years old.</p>
        </div>
      </div>
      <div className="process-btn">
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default LoginDisclaimer;
