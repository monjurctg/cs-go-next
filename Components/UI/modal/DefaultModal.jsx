import React, {useEffect, useState} from "react";
import InitailProcess from "../../Process/Streem/InitailProcess";

function DefaultModal({isShow, body, setClose}) {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    if (isShow) {
      setModalShow(true);
    }
  }, [isShow]);

  const closeModal = () => {
    setModalShow(!modalShow);
    setClose(false);
  };

  return (
    <div
      className="modalContainer"
      style={{display: `${modalShow ? "block" : "none"}`}}>
      <div className="modalContent">
        <div className="header">
          <div></div>
          <div className="close" onClick={closeModal}>
            X
          </div>
        </div>
        <div className="modalBody">{body}</div>
      </div>
    </div>
  );
}

export default DefaultModal;
