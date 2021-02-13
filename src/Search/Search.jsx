import React from "react";

const Search = (props) => {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary mt-3"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
