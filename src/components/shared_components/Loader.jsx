import React from "react";
const Loader = () => {
  return (
    <div className="text-[white] text-center w-[100vw]">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h4>Loading...</h4>
      <p>
        This screen usually appears when the app is updating itself. <br />
        If this persists for too long try closing the browser, waiting a few
        seconds, then opening again.
      </p>
    </div>
  );
};

export default Loader;
