import React, { useEffect } from "react";
import "../CSS/GlobalMessage.scss";

const GlobalMessage = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.removeGlobalMessage();
    }, 2000);

    return () => clearTimeout(timer);
  }, [props.removeGlobalMessage]);

  return (
    props && (
      <div className={`global-message ${props.status}`}>{props.message}</div>
    )
  );
};

export default GlobalMessage;
