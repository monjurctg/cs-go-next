import React, {useEffect, useState} from "react";

function CheckBox() {
  const [isCheck, setIsCheck] = useState(false);

  const handleChange = (e) => {
    setIsCheck(e.target.checked);
  };
  return (
    <label class="checkbox-container">
      <input onChange={handleChange} type="checkbox" checked={isCheck} />
      <span class="checkmark"></span>
    </label>
  );
}

export default CheckBox;
