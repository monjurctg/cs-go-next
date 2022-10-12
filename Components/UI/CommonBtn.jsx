import React from "react";

function CommonBtn({children, onClick, className}) {
  return (
    <div className={`cmn-Btn ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default CommonBtn;
