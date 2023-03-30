import React from "react";
import loading from "./Spinner.gif";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <img className="my-2" src={loading} alt={loading} />
    </div>
  );
};

export default Spinner;
