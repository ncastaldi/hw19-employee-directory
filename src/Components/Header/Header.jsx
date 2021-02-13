import React from "react";
import Search from "../Search/Search";

const Header = () => {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h1>Employee Directory</h1>
          {/* <h5>Click 'Name' head to sort or use Search box to filter results</h5> */}
        </div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <Search />
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
};

export default Header;
