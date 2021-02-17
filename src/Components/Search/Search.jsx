import React from "react";

const Search = (props) => {
  return (
    <div className="input-group mb-3">
      <input
        onChange={props.filtered}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for an employee"
        id="search"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
    </div>
  );
};

export default Search;
