import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
  state = {
    result: {},
    search: "",
  };

  componentDidMount() {
    this.generateEmployeeList();
  }

  generateEmployeeList = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Hello world</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
