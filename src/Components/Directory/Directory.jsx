import React, { Component } from "react";
import EmpTable from "../EmpTable/EmpTable";
import Search from "../Search/Search";
import API from "../../utils/API";

class Directory extends Component {
  state = {
    results: [],
    filteredResults: [],
    filter: "",
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
    //this.filteredResults = this.state.results.filter((result) => (e.target.value));
    this.setState({filter: e.target.value});
  }

  render() {
    return (
      <div className="container">
        <Search filtered={this.handleInputChange}/>
        <EmpTable empList={this.state.filter === ""?this.state.results:this.state.filteredResults} />
      </div>
    );
  }
}

export default Directory;
