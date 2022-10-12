import React, {useState} from "react";
import CompleteProfile from "./CompleteProfile";
import ItemOnSale from "./ItemOnSale";

import LoginDisclaimer from "./LoginDisclaimer";
import Market from "./Market";
import MyInventory from "./MyInventory";

const steps = {
  1: LoginDisclaimer,
  2: Market,
  3: MyInventory,
  4: ItemOnSale,
  5: CompleteProfile,
};
function InitailProcess() {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    if (step <= 5) {
      setStep(step + 1);
    }
  };
  return (
    <div>
      <Step onNext={onNext} setStep={setStep} />
    </div>
  );
}

export default InitailProcess;
