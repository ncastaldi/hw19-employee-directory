import React, { Component } from "react";
import EmpTable from "../EmpTable/EmpTable";
import API from "../../utils/API";

class Directory extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.generateEmployeeList();
  }

  generateEmployeeList = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <EmpTable empList={this.state.results} />
      </div>
    );
  }
}

export default Directory;
