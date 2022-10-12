import React from "react";

function CommonBtn({children, onClick, className, width}) {
  return (
    <div
      className={`cmn-Btn ${className}`}
      style={{
        width: `${width}px`,
      }}
      onClick={onClick}>
      {children}
    </div>
  );
}

export default CommonBtn;
