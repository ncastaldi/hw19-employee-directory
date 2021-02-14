import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import EmpTable from "../../Components/EmpTable/EmpTable";
import API from "../../utils/API";

class Home extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.generateEmployeeList();
  }

  generateEmployeeList = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.results })) //console.log(res.data.results))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <Header />
        <EmpTable empList={this.state.results} />
      </div>
    );
  }
}

export default Home;
