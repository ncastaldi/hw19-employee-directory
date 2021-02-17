import React, { Component } from "react";
import EmpTable from "../EmpTable/EmpTable";
import Search from "../Search/Search";
import API from "../../utils/API";

class Directory extends Component {
  state = {
    results: [],
    filteredResults: [],
    sortedResults: [],
    filter: "",
    sortDir: "asc",
  };

  componentDidMount() {
    this.generateEmployeeList();
  }

  generateEmployeeList = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    this.setState({ filter: e.target.value });
    this.setState({
      filteredResults: this.state.results.filter((name) =>
        name.name.first.includes(this.state.filter)
      ),
    });
  };

  handleSort = (e) => {
    if (this.sortDir === "asc") {
      this.setState({ sortDir: "desc" });
    } else {
      this.setState({ sortDir: "asc" });
    }
  };

  render() {
    return (
      <div className="container">
        <Search filtered={this.handleInputChange} />
        <EmpTable
          empList={
            this.state.filter === ""
              ? this.state.results
              : this.state.filteredResults
          }
        />
      </div>
    );
  }
}

export default Directory;
