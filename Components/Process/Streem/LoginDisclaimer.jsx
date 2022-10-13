import React, {useState} from "react";
import CheckBox from "../../UI/CustomTag/CheckBox";
import Text from "../../UI/CustomTag/Text";

function LoginDisclaimer({onNext}) {
  const [check, setCheck] = useState(false);
  console.log(check);
  return (
    <div className="process-container">
      <Text fs={31} fw={400} color="#9DB4D3">
        Login disclaimer
      </Text>
      <div className="process-body">
        <div className="condition">
          <CheckBox isCheck={check} setIsCheck={setCheck} />
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
