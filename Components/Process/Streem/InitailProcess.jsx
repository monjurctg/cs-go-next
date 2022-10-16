import React, {useEffect, useState} from "react";
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
function InitailProcess({isShow}) {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    if (step <= 5) {
      setStep(step + 1);
    }
  };
  const onSkip = () => {
    if (step <= 4) {
      setStep(5);
    }
  };
  const onCross = () => {
    if (step <= 4) {
      setStep(1);
    }
  };
  useEffect(() => {
    if (!isShow) {
      setStep(1);
    }
  }, [isShow]);
  return (
    <div>
      <Step onNext={onNext} setStep={setStep} onSkip={onSkip} />
    </div>
  );
}

export default InitailProcess;
